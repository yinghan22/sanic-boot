# import inspect
# from math import fabs
# from operator import truediv
# import os
# import sys
#
# from tortoise import Model
#
# from utils import BaseModel
#
#
# currModule = sys.modules[__name__]
# currDir = os.path.dirname(__file__)
# export_list: list[str] = []
#
#
# moduleMap = {}
#
#
# # TODO
# def checkInRuleForControllerClass(target: str) -> bool:
#     if target == "BaseController":
#         return False
#     if len(target) <= 3:
#         return False
#     if "A" <= target[0] <= "Z":
#         return True
#     return False
#
#
# for item in os.listdir(currDir):
#     if not item.endswith(".py") or item == "__init__.py":
#         continue
#     moduleName = item[:-3]
#     try:
#         module = __import__(f"Model.{moduleName}")
#         dirList = [name for name in module.__dir__() if checkInRuleForControllerClass(name)]
#         for iitem in dirList:
#             target = getattr(module, iitem)
#             if inspect.isclass(target) and issubclass(target, Model):
#                 print(f"{moduleName}.{iitem}")
#         moduleMap[moduleName] = module
#     except Exception:
#         print(moduleName)
#
# moduleNameList: list[str] = list(moduleMap.keys())
#
# setattr(currModule, "Model", {})
#
# setattr(currModule, "__all__", moduleNameList)
