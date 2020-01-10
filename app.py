from flask import Flask
from flask import render_template 
import requests
import json 

app = Flask(__name__)

@app.route("/", methods = ['GET'])
def hello():
    hi = "Hello Winterns Test. Katya. "
    return render_template('app.html', text=hi)
