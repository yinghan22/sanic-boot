"""
@file    : crud.py
@author  : yingHan/嬴寒
@email   : yinghan22@163.com
@create  : 2026/01/05 09:47
"""
import types


class CRUD:
    """
    CRUD 注入操作均使用 POST 方式，如需修改为其他请求方式，请使用 RequestMapping 等自行定义处理函数，而非使用 CRUD 注入。

    当多装饰器组合使用时，请按照**人性化逻辑顺序**进行书写，即：`Controller` 书写在 `CRUD` 上方。（当然你也可以忽视此建议）

    此外，CRUD 允许独立使用 create、modify、delete、query 装饰器，

    建议用例（recommend usage implement）
    ```
    @Controller(uri='/test')
    @CRUD(model=Model,flag = CRUD.Flag.create | CRUD.Flag.modify | CRUD.Flag.delete, update='update') # 此处对 update 操作进行路由重命名
    class TestController:
        pass
    ```
    """

    class Flag:
        create = C = 0b1000
        query = select = read = R = 0b0100
        modify = update = U = 0b0010
        remove = delete = D = 0b0001

    def __init__(self, baseUri: str = '', model: type | None = None, flag: int = 0, createName: str = 'create', readName: str = 'query',
                 updateName: str = 'modify', deleteName: str = 'delete'):
        self.baseUri = baseUri
        self.model = model
        self.flag = flag
        self.create = createName
        self.read = readName
        self.update = updateName
        self.delete = deleteName

    def __call__(self, clazz: type):
        if self.flag & CRUD.Flag.C is True:
            clazz = CRUD.create(clazz)
        print('call decorator', clazz.__name__)
        return clazz

    @staticmethod
    def create(clazz, uri: str | None = None, baseUri: str = '', Model: type | None = None):
        def createHandler(self):
            print('method create handler called')

        # A.createHandler = types.MethodType(createHandler, A)
        setattr(clazz, 'createHandler', types.MethodType(createHandler, clazz))
        uri = 'create' if uri is None else uri
        createHandler.__router__ = '/'.join((baseUri, uri))
        return clazz
