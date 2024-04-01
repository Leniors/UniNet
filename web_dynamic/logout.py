#!/usr/bin/python3
"""
logout file
"""
from . import app_views
from models import storage
from models.user import User
from flask import render_template, request, redirect, url_for
from flask_login import login_required, logout_user

@app_views.route('/logout', strict_slashes=False, methods=["GET"])
@login_required
def logout():
    """Logout"""
    logout_user()
    return redirect(url_for('app_view.login'))
