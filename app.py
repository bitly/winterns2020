from flask import Flask
from flask import (request, session, render_template, abort, jsonify)
from flask import render_template 
import requests
import json 

app = Flask(__name__)
app.secret_key = "secret"
 
@app.route("/", methods = ['GET'])
def hello():
    hi = "Hello Winterns Test. Katya."
    return render_template('app.html', text=hi)


@app.route('/api', methods=['GET', 'POST'])
def quote():
    
    auth_token = request.json['authToken'] 

    response = requests.get('https://api-ssl.bitly.com/v4/user', headers={"Authorization": "Bearer " + auth_token})
     
    return (response.json()) 



