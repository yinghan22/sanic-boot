"""
@file    : Result.py
@author  : yingHan/嬴寒
@email   : yinghan22@163.com
@create  : 2026/02/14 14:42
"""

from sanic import json


class Result:
    class Status:
        success = 200
        server_error = 500

    @staticmethod
    def success(data, message: str | None = None):
        return json(
            {
                "status": Result.Status.success,
                "data": data,
                "message": message,
            }
        )
