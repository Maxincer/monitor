"""
Function:
    1. monitor 307 margin account position
"""
from datetime import datetime
from json import dumps

from flask import Flask, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = "mongodb://Maxincer:winnerismazhe@192.168.2.162:27017/trade_data?authSource=admin"
mongo = PyMongo(app)

str_today = datetime.today().strftime('%Y%m%d')


@app.route('/js_get_position_data')
def get_position_data():
    json_data = dumps(list(mongo.db.trade_position.find({'DataDate': str_today}, {'_id': 0})))
    return json_data


@app.route('/')
def display_trade_position():

    return render_template('position.html')


if __name__ == '__main__':
    app.run()



