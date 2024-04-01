#!/usr/bin/python3
"""
index file
"""
from . import app_views
from models import storage
from models.user import User
from flask import render_template, request, flash, redirect, url_for
from werkzeug.security import check_password_hash
from flask_login import login_user

@app_views.route('/login', strict_slashes=False, methods=["GET", "POST"])
def login():
    """Login"""
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        user = storage.get_user_by_email(User, email=email)

        if user:
            if check_password_hash(user.password, password):
                login_user(user, remember=True)
                return redirect(url_for('uninet'))
            else:
                flash('Wrong password, try again.')
        else:
            flash('No user with this email')
    return render_template('login.html')
