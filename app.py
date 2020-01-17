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


@app.route('/api', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def quote():
    
    auth_token = request.json['authToken'] 
    endpoint = request.json['apiEndpoint']
    params = request.json['paramsList']

    print(params)
    response = requests.post('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token}, json={"long_url":"https://www.youtube.com/watch?v=uvgBKO7CGzY"})

    # response = requests.get('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
    params = {}
    # if 'params' in request.json:
        # params = request.json['params']
    # method = request.json['method']
    method = 'GET'

    # params = {'Key1', 'Value1'}
    # params = {'Key2', 'Value2'}
    


    if method == 'GET':
        response = requests.get('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
    elif method == 'POST':
        response = requests.post('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
    elif method == 'PATCH':
        response = requests.patch('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
    elif method == 'DELETE':
        response = requests.delete('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
   
 
    return (response.json())   



