#!/bin/sh

cd /workspace/winterns2020

# Changes to your flask app will be reflected without having to restart the app.
export FLASK_ENVIRONMENT=development

# install js requirements
npm install

# install python requirements
pip install -r requirements.txt
