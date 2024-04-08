#!/usr/bin/python3
"""
logout file
"""
from . import app_views
from models import storage
from models.user import User
from models.tale import Tale
from flask import render_template, request, flash, redirect, url_for
from flask_login import login_required, current_user


@app_views.route('/create-tale', strict_slashes=False, methods=["GET", "POST"])
@login_required
def create_tale():
    """Create Tale"""
    if request.method == 'POST':
        title = request.form.get('title')
        content = request.form.get('content')

        if len(title) < 3:
            flash('Title is too short')
        elif len(content) < 3:
            flash('Content is too short')
        else:
            new_tale = Tale(title=title, content=content, user_id=current_user.id)
            new_tale.save()
            flash('Tale Created Successsfully!')
            return redirect(url_for('app_views.user'))
    return render_template('create_tale.html', user=current_user)
