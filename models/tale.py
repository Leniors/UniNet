#!/usr/bin/python3
""" holds class User"""
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey


class Tale(BaseModel, Base):
    """ Representation of a tale """
    if models.storage_t == 'db':
        __tablename__ = 'tales'
        title = Column(String(128), nullable=True)
        content = Column(String(2000), nullable=False)
        user_id = Column(String(60), ForeignKey('users.id'), nullable=False)

    def __init__(self, *args, **kwargs):
        """initializes user"""
        super().__init__(*args, **kwargs)
