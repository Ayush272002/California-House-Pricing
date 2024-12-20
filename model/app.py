import pickle
from flask import Flask, request, app, jsonify, url_for, render_template
from flask_cors import CORS
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

# load the model
regmodel = pickle.load(open('california_housing.pkl', 'rb'))
scaler = pickle.load(open('scaler.pkl', 'rb'))

@app.route('/predict_api', methods=['POST'])
def predict_api():
    data = request.json['data']
    print(data)
    print(np.array(list(data.values())).reshape(1,-1))
    new_data = scaler.transform(np.array(list(data.values())).reshape(1,-1))
    output = regmodel.predict(new_data)
    print(output[0])
    return jsonify(output[0])

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        input_values = list(data.values())
        input_data = [float(x) for x in input_values]
        final_input = scaler.transform(np.array(input_data).reshape(1, -1))
        output = regmodel.predict(final_input)[0]
        return jsonify({"prediction": float(output)})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)