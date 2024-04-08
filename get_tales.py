#!/usr/bin/python3
""" Test link Many-To-Many Place <> category
"""
from models import *
import models
from models import storage
from models.category import Category
from models.user import User
from models.tale import Tale
from models.base_model import BaseModel, Base

user = storage.get_user_by_email(User, "leeroynyanchwa@gmail.com")

if user:
    tales = user.tales
    for tale in tales:
        print(tale.content)
else:
    print("User not found")
