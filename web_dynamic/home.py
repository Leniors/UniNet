#!/usr/bin/python3
"""
logout file
"""
from . import app_views
from models import storage
from models.user import User
from flask import render_template, request, redirect, url_for
from flask_login import current_user

@app_views.route('/', strict_slashes=False, methods=["GET"])
def uninet():
    """home"""
    return render_template('uninet.html', user=current_user)
