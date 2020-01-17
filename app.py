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
    endpoint = request.json['apiEndpoint']
    Method= request.json['Method']

    if Method=='GET':
            response = requests.get('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
    elif Method=='POST':
        payload={'bitlink_id':'http://bit.ly/303C2J0'} 
        response = requests.post('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token}, params=payload )
    elif request.method=='PATCH':
         print("This is Get method")
    elif request.method=='DELETE':
         print("This is Get method")
    response = requests.get('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
 
    return (response.json())   



