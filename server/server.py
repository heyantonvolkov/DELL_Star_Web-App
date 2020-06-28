from flask_api import FlaskAPI

app = FlaskAPI(__name__)


@app.route("/sortBubble", methods=['POST'])
def index(num):
	return num

# @app.route("/sortElse", methods=['GET', 'POST'])
# def index(num):
# 	return num


if __name__ == "__main__":
    app.run(debug=True)

