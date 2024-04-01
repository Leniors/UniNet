#!/usr/bin/python3
""" holds class User"""
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String
from flask_login import UserMixin


class User(BaseModel, Base, UserMixin):
    """Representation of a user """
    if models.storage_t == 'db':
        __tablename__ = 'users'
        username = Column(String(128), nullable=False, unique=True)
        email = Column(String(128), nullable=False, unique=True)
        password = Column(String(1000), nullable=False)
    else:
        email = ""
        password = ""
        first_name = ""
        last_name = ""

    def __init__(self, *args, **kwargs):
        """initializes user"""
        super().__init__(*args, **kwargs)
