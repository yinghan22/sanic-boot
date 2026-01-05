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

    def wrapper(clazz: Optional[type], url: Optional[str] = None):
        assert clazz is not None
        if url is None:
            url = clazz.__name__
            url = __to_kebab_case__(url[: -len("Controller")] if url.endswith("Controller") else url)
        assert url is not None
        setattr(clazz, "__controller__", url)
        return clazz

    return wrapper if target is None else wrapper(target, url=uri)
