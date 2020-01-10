from flask import Flask
from flask import render_template 
import requests, json

app = Flask(__name__)

@app.route("/")
def hello():
    hi = "Hello Winterns Test. Katya. "
    return render_template('app.html', text=hi)


@app.route('/api', methods=['GET', 'POST'])
def quote():
    response = requests.get('https://api-ssl.bitly.com/v4/user', headers={"Authorization": "Bearer token"})
    
    return (response.json())

@app.route('/api', methods=['GET', 'POST'])
def quote():
    response = requests.post('https://api-ssl.bitly.com/v4/expand', headers={"Authorization": "Bearer token"}, json={"bitlink_id":"bit.ly/2Nbig94"})
    
    return (response.json())


