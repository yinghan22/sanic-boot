"""
@file    : crud.py
@author  : yingHan/嬴寒
@email   : yinghan22@163.com
@create  : 2026/01/05 09:47
"""

import types

import sanic
from sanic.request import Request
import tortoise

from sanic_boot.core.RequestMapping import PostMapping
from sanic_boot.core.Result import Result


def relateUri(baseUri, uri):
    baseUri = baseUri[:-1] if baseUri.endswith("/") else baseUri
    uri = uri[:-1] if uri.endswith("/") else uri
    uri = uri[1:] if uri.startswith("/") else uri
    return baseUri, uri


def nullAsNone(item):
    return None if item == "null" else item


class CRUD:
    """
    CRUD 注入操作均使用 POST 方式，如需修改为其他请求方式，请使用 RequestMapping 等自行定义处理函数，而非使用 CRUD 注入。

    当多装饰器组合使用时，请按照**人性化逻辑顺序**进行书写，即：先书写`Controller`，再书写在 `CRUD`。（当然你也可以忽视此建议）

    此外，CRUD 允许独立使用 create、modify、delete、select 装饰器，

    建议用例（recommend usage implement）
    ```
    @Controller(uri='/test')
    @CRUD(model=Model,flag = CRUD.Flag.create | CRUD.Flag.modify | CRUD.Flag.delete, update='update') # 此处对 update 操作进行路由重命名
    class TestController:
        pass
    ```
    """

    class Flag:
        all = 0b1111
        create = C = 0b1000
        query = select = read = R = 0b0100
        modify = update = U = 0b0010
        remove = delete = D = 0b0001

    @staticmethod
    def crud(
        model: type[tortoise.Model],
        baseUri: str = "",
        flag: int = 0,
        createName: str = "create",
        readName: str = "select",
        updateName: str = "modify",
        deleteName: str = "delete",
    ):
        baseUri = baseUri
        model = model
        flag = flag

        def wrapper(clazz: type):
            nonlocal baseUri, model, flag, createName, readName, updateName, deleteName
            if bool(flag & CRUD.Flag.C):
                clazz = CRUD.create(model, uri=createName, baseUri=baseUri)(clazz)
            if bool(flag & CRUD.Flag.R):
                clazz = CRUD.select(model, uri=readName, baseUri=baseUri)(clazz)
            if bool(flag & CRUD.Flag.U):
                clazz = CRUD.update(model, uri=updateName, baseUri=baseUri)(clazz)
            if bool(flag & CRUD.Flag.D):
                clazz = CRUD.delete(model, uri=deleteName, baseUri=baseUri)(clazz)
            # print('call decorator', clazz.__name__)
            return clazz

        return wrapper

    @staticmethod
    def create(model: type[tortoise.Model], uri: str = "", baseUri: str = ""):
        Model = model
        fields_list = getattr(Model, "_meta").fields
        pk_name = getattr(Model, "_meta").pk_attr

        uri = "create" if uri is None else uri
        baseUri, uri = relateUri(baseUri, uri)

        def wrapper(clazz: type):
            nonlocal Model, uri, baseUri, fields_list, pk_name

            @PostMapping(uri="/".join((baseUri, uri)))
            async def createHandler(self: type, request: Request):
                nonlocal fields_list
                assert request.form is not None
                param = {
                    item: request.form.get(item, None)
                    for item in fields_list
                    if item in request.form
                }
                if hasattr(clazz, "before_create"):
                    param = await clazz.before_create(request, param)
                __data__ = Model(**param)
                await __data__.save()
                __data__ = {
                    fieldName: getattr(__data__, fieldName) for fieldName in fields_list
                }
                if hasattr(clazz, "created"):
                    __data__ = await clazz.created(request, __data__)
                return Result.success(data=__data__)

            setattr(clazz, "createHandler", types.MethodType(createHandler, clazz))
            return clazz

        return wrapper

    @staticmethod
    def select(model: type[tortoise.Model], uri: str = "", baseUri: str = ""):
        Model = model
        fields_list = getattr(Model, "_meta").fields
        pk_name = getattr(Model, "_meta").pk_attr
        uri = "read" if uri is None else uri
        baseUri, uri = relateUri(baseUri, uri)

        def wrapper(clazz: type):
            nonlocal Model, uri, baseUri, fields_list, pk_name

            @PostMapping(uri="/".join((baseUri, uri)))
            async def selectHandler(self, request: sanic.Request):
                raw_condition: dict | None = request.json()
                assert raw_condition is not None

                condition = {}

                for field in fields_list:
                    if field in raw_condition:
                        value = raw_condition.get(field)
                        key = f"{field}__in" if type(value) is list else field
                        condition[key] = value

                if hasattr(clazz, "select_condition"):
                    condition = await clazz.select_condition(request, condition)
                __data__ = await Model.filter(**condition)
                if hasattr(clazz, "selected"):
                    __data__ = await clazz.selected(request, __data__)
                return Result.success(data=__data__)

            setattr(clazz, "selectHandler", types.MethodType(selectHandler, clazz))

            return clazz

        return wrapper

    @staticmethod
    def update(model: type[tortoise.Model], uri: str = "", baseUri: str = ""):
        Model = model
        fields_list = getattr(Model, "_meta").fields
        pk_name = getattr(Model, "_meta").pk_attr

        uri = "update" if uri is None else uri
        baseUri, uri = relateUri(baseUri, uri)

        def wrapper(clazz: type):
            nonlocal Model, uri, baseUri, fields_list, pk_name

            @PostMapping(uri="/".join((baseUri, uri, "<id>")))
            async def updateHandler(self, request: sanic.Request, id):
                assert request.form is not None
                __data__ = await Model.filter(**{pk_name: id}).first()
                if not __data__:
                    raise RuntimeError("主键值不存在")
                content = {
                    item: nullAsNone(request.form.get(item))
                    for item in fields_list
                    if item in request.form
                    and request.form.get(item) != __data__.__getattribute__(item)
                }
                if hasattr(clazz, "before_update"):
                    content = await clazz.before_update(request, content, __data__)
                if content:
                    await __data__.update_from_dict(content)
                    await __data__.save()
                if hasattr(clazz, "updated"):
                    __data__ = {
                        fieldName: getattr(__data__, fieldName)
                        for fieldName in fields_list
                    }
                    __data__ = await clazz.updated(request, __data__)
                return Result.success(__data__)

            setattr(clazz, "updateHandler", types.MethodType(updateHandler, clazz))

            return clazz

        return wrapper

    @staticmethod
    def delete(model: type[tortoise.Model], uri: str = "", baseUri: str = ""):
        Model = model
        fields_list = getattr(Model, "_meta").fields
        pk_name = getattr(Model, "_meta").pk_attr

        uri = "delete" if uri is None else uri
        baseUri, uri = relateUri(baseUri, uri)

        def wrapper(clazz: type):
            nonlocal Model, uri, baseUri, fields_list, pk_name

            @PostMapping(uri="/".join((baseUri, uri, "<id>")))
            async def deleteHandler(self: type, request: sanic.Request, id):
                assert request.form is not None
                # TODO
                await Model(**{pk_name: id}).delete()
                data = None
                if hasattr(clazz, "deleted"):
                    data = await clazz.deleted(request, id)
                return Result.success(data=data, message="删除成功")

            setattr(clazz, "deleteHandler", types.MethodType(deleteHandler, clazz))

            return clazz

        return wrapper
