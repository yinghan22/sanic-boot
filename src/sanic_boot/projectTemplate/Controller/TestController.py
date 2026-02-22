from sanic import HTTPResponse, Request, response
from sanic.views import HTTPMethodView

from sanic_boot.core import (
    Controller,
    GetMapping,
    PostMapping,
    RequestMapping,
    RequestMethod,
    Result,
)


@Controller(uri="/")
class IndexController:
    @GetMapping("/get")
    def get(self, request: Request) -> HTTPResponse:
        return response.json({"status": 200})

    @PostMapping(uri="/testview")
    class Test(HTTPMethodView):
        async def get(self, request: Request):
            return Result.success(data={})


@Controller
class TestController:
    @RequestMapping("/logout", RequestMethod.GET)
    async def logout(self, request: Request) -> HTTPResponse:
        return response.json({"status": 200})
