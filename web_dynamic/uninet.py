#!/usr/bin/python3
"""
Flask Application
"""
#import os
#import sys

#project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
#sys.path.append(project_root)

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/', strict_slashes=False)
def hbnb():
    return render_template('uninet.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
