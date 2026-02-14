"""
@file    : Controller.py
@author  : yingHan/嬴寒
@email   : yinghan22@163.com
@create  : 2025/12/3 16:12
"""

import re
from typing import Optional


def __insert_space__(text):
    return re.sub(r"(?<!^)(?=[A-Z])", " ", text)


def __to_kebab_case__(text):
    return __insert_space__(text).lower().replace(" ", "-")


def Controller(target: Optional[type] = None, uri: Optional[str] = None):
    """
    Controller 控制器注册

    :param target {class} 注解对象
    :param uri {str} 命名参数，指定 Controller 的路由路径
    """

    def wrapper(clazz: Optional[type], inner_url: Optional[str] = None):
        nonlocal uri
        assert clazz is not None
        if uri is None:
            inner_url = clazz.__name__
            inner_url = __to_kebab_case__(inner_url[: -len("Controller")] if inner_url.endswith("Controller") else url)
        else:
            inner_url = uri
        assert inner_url is not None
        setattr(clazz, "__controller__", inner_url)
        return clazz

    return wrapper if target is None else wrapper(target, inner_url=uri)
