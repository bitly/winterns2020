from flask import Flask
from flask import render_template 
import requests
import json
app = Flask(__name__)

@app.route("/api", methods=['POST'])
def hello():
    hi = "Hello Winterns Test"
    response = requests.post('https://api-ssl.bitly.com/v4/bitlinks', headers={"Authorization": "Bearer f49a5d4d7d7eacc777aa3fa67d58fec9250f9759"}, json={"long_url":"https://www.youtube.com/watch?v=uvgBKO7CGzY"})

    print(json.loads(response.text))
    return render_template('app.html', text=hi)


