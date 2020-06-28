from flask_api import FlaskAPI

app = FlaskAPI(__name__)


def fib(n):
    a = 0
    b = 1
    for __ in range(n):
        a, b = b, a + b
    return a

@app.route("/", methods=['GET', 'POST'])
def index(num):
	return num


if __name__ == "__main__":
    app.run(debug=True)

