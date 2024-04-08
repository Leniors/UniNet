#!/usr/bin/python3
"""
logout file
"""
from . import app_views
from models import storage
from models.user import User
from flask import render_template
from flask_login import login_required, current_user

@app_views.route('/create-teaser', strict_slashes=False, methods=["GET"])
@login_required
def create_teaser():
    """Create Teaser"""
    return render_template('create_teaser.html', user=current_user)
