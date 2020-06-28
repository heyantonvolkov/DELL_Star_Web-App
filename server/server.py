from flask_api import FlaskAPI
from flask import request

app = FlaskAPI(__name__)


@app.route("/sortBubble", methods=['POST'])
def sortBubble():
	print(request.data)
	return request.data

# @app.route("/sortElse", methods=['GET', 'POST'])
# def index(num):
# 	return num


if __name__ == "__main__":
    app.run(debug=True)

