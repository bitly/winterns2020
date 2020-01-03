from flask import Flask
from flask import render_template 

app = Flask(__name__)

@app.route("/")
def hello():
    hi = "Hello Winterns!"
    return render_template('app.html', text=hi)
