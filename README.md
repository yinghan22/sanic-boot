![sanic Framework boot | sanic-boot](sanic-framework-boot-logo-400x93.png)

# sanic-boot

sanic-boot 基于 Sanic 框架，为开发者提供与 Spring Boot 类似的装饰器，便于路由系统、模型类的自动装配与配置。

## Sanic | Build fast. Run fast.

Sanic is a Python 3.9+ web server and web framework that's written to go fast. It allows the usage of the `async/await` syntax added in
Python
3.5, which makes your code non-blocking and speedy.

## 注意

本框架没有对原生的 `sanic` 框架造成任何侵入性的修改，但由于模型（Models）、路由（Routers）、任务（Task）等自动加载实现机制较为笨拙，可能会对 `sanic`
的网络请求造成不可预估的影响。

## TODO List

+ [x] 自动装配基础路由
+ [x] 自动装配类视图路由
+ [x] 自动装配 Background Task
+ [x] 自动装配模型类
+ [x] 文档
+ [x] Websocket
+ [x] 流式传输（Streaming）
+ [ ] 为 Controller 注入 CRUD 操作
+ [ ] 封装 APScheduler 定时任务框架

## 安装

```bash
# 使用 pip
pip install sanic-boot

# 使用uv
uv add sanic-boot
```

### 可能的依赖

```bash
# 使用 pip
pip install sanic sanic-ext tortoise-orm
# 或
pip install sanic[ext] tortoise-orm[asyncpg|psycopg|asyncmy|asyncodbc]

# 使用 uv
uv add ...
```

sanic-ext 提供 docs、cors 等；
tortoise-orm 提供 ORM 等。

## Hello World Example

```python
from sanic_boot import sanicBoot
import sanic

app = sanicBoot(__name__)


# 使用 sanic 自带的装饰器仍然有效
@app.get("/")
def index(request):
    return sanic.response.text("hello")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8088, debug=True, auto_reload=True)

```

### 1. Create NORMAL route by common function (which can be with `async`)

```python
from sanic import Request, text
from sanic_boot import GetMapping


# 面向函数
@GetMapping('/index')
async def index(request: Request):
    return text('Hello')
```

### 2. Create Router View from class, which just collect the route -- A simple method instead of blueprint

```python
from sanic import Request, text, json
from sanic_boot import Controller, GetMapping, RequestMapping


# 面向类
@Controller('/person')
class PersonController:
    # 使用 RequestMapping 装饰器后，若发现目标是类且不是 HTTPMethodView 的子类，则会在继承链中添加 HTTPMethodView 类。
    # （*注意*：此举可能会造成多继承冲突！！！）
    @RequestMapping('/login')
    class Login:
        async def get(self, request: Request):
            return text('the route is /person/login')

    # 除视图外，还可以使用普通方法构造路由
    @GetMapping('/logout')
    async def logout(self, request: Request):
        return json({
            'code': 200,
            'data': '退出登录'
        })
```

### 3. Create Task by decorator `Task`, which is allowed to get a parameter named `name` or

`taskName`. If there is no parameter has, the value `None` will be the default value assigned to argument `name`。

```python
import asyncio
from sanic import Sanic
from sanic_boot import Task


@Task(name='')  # name 或 taskName 默认为 None
async def gen(app: Sanic):
    while True:
        print([item for item in range(10)])
        await asyncio.sleep(5000)
```

## Decorator Description

+ `@Controller (uri : str = '')`
  > 装饰器 `Controller` 意在收集目标注解对象内部注册的路由，是 `sanic` 框架中 `blueprint` 蓝图系统的自动化实现。
  >
  > sanic 官方网站中提供了自动收集 blueprint 的辅助文件，能够帮助开发者给予蓝图系统快速构建路由系统。而装饰器 `Controller` 则延伸了官方方案，参考
  `Spring Boot` 装饰器思路，提供能够相对完备的路由系统自动组装方案。
  >
  > 装饰器 `Controller`允许不携带任何参数，此时将自动分配路由，分配的路由与目标注解的类名有关，类名推荐的格式为
  `^[A-Z][A-Za-z0-9]*Controller$`
  ，（即大写字母开头的有意义单词，并以单词 Controller
  > 结尾），分配所得路由为全小写且不含 `Controller`。如 `TestController` 的路由为 `test`，`TestTest2Controller` 的路由为 `test-test2`
  >
  > _注意_: 若最终注册的路由存在重复将会造成**路由冲突**，此外，若注册的函数名在相同层级上存在重复，也会造成路由系统收集异常。故建议开发者在不同业务中为路由句柄（handler）赋予不同的名称

+ `@RequestMapping(uri : str, methods: list[RequestMethod] | RequestMethod | None = None)`
  > 使用 `RequestMapping` 时若注解对象是一个视图类，则第二个参数可缺省，`sanic` 内部的路由系统将会根据视图类的方法自动分配路由方法。装饰器
  `RequestMapping` 是 `sanic` 框架中类视图注册方法 `app.add_route (Class.as_view(), ...)` 的自动化实现。

+ `@[Get|Post|Head|Put|Delete|Patch|Options]Mapping(uri : str)`
  > `@GetMapping (uri : str)` 等装饰器是 `@RequestMapping ('/login', RequestMethod.GET)`
  > 的简便写法。需要注意的是这些简便写法尽量不要应用在视图类上。但基于实际的代码逻辑实现而言，即使对视图类上进行应用，也不会造成任何不可预计的后果。

+ `@Task(name : str = None)`
  > 在 Tasks 目录下注册任务事件。目前尚未想好如何以最佳的形式将 APScheduler 封装进去，故开发者可根据自己需要进行封装。

+ `@CRUD.crud(model: type[tortoise.Model], baseUri: str, flag : int = 0, createName: str = 'create', readName: str = 'query', updateName: 
str = 'modify', 
deleteName: str = 'delete')`
  > 使用 `CRUD` 对基础操作进行统一配置，是对 `@CRUD.[create|read|update|delete](...)` 的快捷书写形式
  >
  > + `model : type[tortoise.Model]`  该参数必须是 Model 类的子类，不能为空，后续所有操作都需要使用 model 类操作数据库记录
  >
  > + `baseUri : str`  针对基础操作的基础路由
  > > 例如 `baseUri = 'person'`，则生成的路由分别是
  > > 1. `/person/create`
  > > 2. `/person/query`
  > > 3. `/person/modify` （故意使用 `modify` 而非 `update`）
  > > 4. `/person/delete`
  >
  > + `flag : int` 对四个基本操作分别使用1个二进制位表示，CRUD 按顺序每位取 1 表示激活。为避免误操作，默认为 0，即均不激活。
  >
  > + `createName: str = 'create', readName: str = 'query', updateName: 
str = 'modify'`  当且仅当 CRUD 的 flag 取值中对应的基本操作激活时（位上为 1）可对有效的CRUD操作的路由进行自定义命名。
  > > 例：当设置 `flag = CRUD.Flag.R | CRUD.Flag.D` 时
  > > > 若此时对所有的 `[create|read|update|delete]Name` 设置自定义值，仅 `ReadName` 与 `DeleteName` 有效。
+ `@CRUD.[create|read|update|delete](model: type[tortoise.Model], uri: str = '', baseUri: str = '')`
  > **注意**： 由于参数 `model` 除类型必须是 `{ORM}.Model` 模型类的子类这一类型约束外，没有任何赋值上的限制，故而理论上可以在任意类中使用`CRUD`
  的相关装饰器生成数据库基本操作，因此强烈建议不要在相关的接口中使用`CRUD`装饰生成其他模型的`CRUD`接口。此外，`CRUD`
  装饰器生成的接口仅是基本的数据库操作，对于复杂的关联性操作，请自定义接口进行实现。

  > 在使用`CRUD`装饰器时，允许开发者对运行时的操作数据进行干预。
  > 1. `create`
  >> 1. `before_create` 创建数据实例之前
  >> 2. `after_create` 创建数据实例并获取数据的字典（`dict`）之后
  >> 3. `create` 在执行完`after_create`之后
  > 2. `read`
  > > 1. 432
  > 3. `update`
  > > 1. `before_update` 收集完更新字段之后，更新数据之前
  > > 2. `after_update` 更新数据记录并获取数据的字典（`dict`）之后
  > > 3. `updated` 在执行完`after_update`之后
  > 4. `delete`
  > > 1. `after_delete` 删除数据之后
  > > > **注意**：`delete`删除数据库记录的操作最好自定义实现，除非你确定要实际删除指定的数据记录（）