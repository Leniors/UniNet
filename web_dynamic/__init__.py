#!/usr/bin/python3
"""
init file
"""
from flask import Blueprint

app_views = Blueprint('app_views', __name__)

from . import login
from . import sign_up
from . import current_user
from . import logout