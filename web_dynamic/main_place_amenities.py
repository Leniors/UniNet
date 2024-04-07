#!/usr/bin/python3
""" Test link Many-To-Many Place <> category
"""
from models import *
import models
from models.category import Category
from models.base_model import BaseModel, Base

# creation of various Categories
category_1 = Category(name="Live")
category_1.save()
category_2 = Category(name="Coding")
category_2.save()
category_3 = Category(name="Comedy")
category_3.save()
category_4 = Category(name="Documentary")
category_4.save()
category_5 = Category(name="Nature")
category_5.save()
category_6 = Category(name="Food")
category_6.save()

storage.save()

print("OK")
