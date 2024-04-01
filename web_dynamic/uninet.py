#!/usr/bin/python3
"""
Flask Application
"""
from models import storage
from models.user import User
from flask import Flask, render_template
from . import app_views  # Relative import
from flask_login import LoginManager, current_user

app = Flask(__name__)
app.config['SECRET_KEY'] = 'nyanchwa'

app.register_blueprint(app_views)

@app.route('/', strict_slashes=False)
def uninet():
    return render_template('uninet.html', user=current_user)

login_manager = LoginManager()
login_manager.login_view = 'app_views.login'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(id):
    return storage.get_user_by_id(User, id)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

