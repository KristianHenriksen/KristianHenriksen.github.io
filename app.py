from flask import Flask, render_template, redirect, url_for
from flask_frozen import Freezer

app = Flask(__name__)
freezer = Freezer(app)

@app.route("/")
def index():
    return redirect(url_for('index'))

if __name__ == '__main__':
    freezer.freeze()