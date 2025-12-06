"""
@file    : Controller.py
@author  : yingHan/嬴寒
@email   : yinghan22@163.com
@create  : 2025/12/3 16:12
"""

import functools
from typing import Optional, Type


class Task:
    def __init__(self, *args, **kwargs):
        self.cls: Optional[Type] = args[0] if len(args) >= 1 else None
        self.uri = kwargs.get("uri") if "uri" in kwargs else None

        if self.cls is not None and self.uri is None:
            self.uri = str(self.cls.__name__.replace("Controller", "")).lower().replace("index", "")
            if self.uri == "" or self.uri == "/":
                raise RuntimeError(f"the router of {self.cls.__name__} is conflict")
        if self.cls is not None and self.uri is not None:
            self.resetClass()

    def resetClass(self):
        setattr(self.cls, "isController", True)

    def __call__(self, cls):
        if self.cls is None:
            self.cls = cls

        if self.uri is None:
            self.uri = str(cls.__name__.replace("Controller", "")).lower().replace("index", "")
        if self.uri == "":
            self.uri = "/"

        @functools.wraps(cls)
        def decorator(*args, **kwargs):
            return self.cls

        return decorator

    def __set_name__(self, owner, name: str):
        self.name = name
        return owner
