from flask_api import FlaskAPI
from flask import request

app = FlaskAPI(__name__)


@app.route("/sortBubble", methods=['POST'])
def sortBubble():
	print(request.data.get('array'))
	return request.data

def provideBubbleSort(collection):
	length = len(collection)
    for i in range(length - 1):
        swapped = False
        for j in range(length - 1 - i):
            if collection[j] > collection[j + 1]:
                swapped = True
                collection[j], collection[j + 1] = collection[j + 1], collection[j]
        if not swapped:
            break  # Stop iteration if the collection is sorted.
    return collection

# @app.route("/sortElse", methods=['GET', 'POST'])
# def index(num):
# 	return num


if __name__ == "__main__":
    app.run(debug=True)

