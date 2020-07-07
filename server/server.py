from flask_api import FlaskAPI
from flask import request
from flask_cors import CORS, cross_origin
import time

app = FlaskAPI(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/sortBubble", methods=['POST'])
def sortBubble():
    collection = request.data.get('array')
    startTime = time.time()
    collection = provideBubbleSort(collection)
    resolveTime = time.time() - startTime
    return {"result": collection, "resolveTime": resolveTime}

def provideBubbleSort(collection):
    print('HERE', collection)
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

if __name__ == "__main__":
    app.run(host="0.0.0.0")

