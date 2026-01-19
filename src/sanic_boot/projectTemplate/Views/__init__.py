from sanic import HTTPResponse, Request, json

from sanic_boot.core import GetMapping


@GetMapping("/router")
async def getAllRoutes(request: Request) -> HTTPResponse:
    result = [f"/{'/'.join(item)}" for item in request.app.router.routes_all.keys()]
    return json(
        {"status": 200, "dataType": "Array", "data": result, "length": len(result)}
    )
