from flask import Flask
from flask import render_template 
import requests
import json
app = Flask(__name__)

@app.route("/api", methods=['GET','POST'])
def hello():
    hi = "Hello Winterns Test"
    response = requests.post('https://api-ssl.bitly.com/v4/bitlinks', headers={"Authorization": "Bearer <enter token>"}, json={"long_url":"https://www.youtube.com/watch?v=uvgBKO7CGzY"})

    print(json.loads(response.text))
    return render_template('app.html', text=hi)


