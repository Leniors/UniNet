#!/usr/bin/python3
"""
index file
"""
from . import app_views
from models import storage
from models.user import User
from flask import render_template, request, flash, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash


@app_views.route('/sign-up', strict_slashes=False, methods=["GET", "POST"])
def sign_up():
    """Sign-up"""
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        user = storage.get_user_by_email(User, email)

        if user:
            flash('Email already exists.', category='error')
        else:
            user_by_username = storage.get_user_by_username(User, username)

            if user_by_username:
                flash('Username is already taken')
            elif len(username) < 3:
                flash('Username must be atleast 2 characters')
            elif len(password1) < 4:
                flash('Password must be more than 4 characters')
            elif password1 != password2:
                flash('Passwords don\'t match')
            else:
                new_user = User(username=username, email=email, password=generate_password_hash(password1))
                new_user.save()
                flash('Account Created Successsfully!')
                return redirect(url_for('app_views.login'))
    return render_template('sign_up.html')
