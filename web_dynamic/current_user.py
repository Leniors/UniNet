#!/usr/bin/python3
"""
logout file
"""
from . import app_views
from models import storage
from models.user import User
from flask import render_template
from flask_login import login_required, current_user

@app_views.route('/user', strict_slashes=False, methods=["GET"])
@login_required
def user():
    """Current user"""
    return render_template('user_profile.html', user=current_user)
