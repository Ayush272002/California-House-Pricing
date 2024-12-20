# California Housing Price Prediction

This project predicts house prices based on the California housing dataset using a linear regression model. The application includes a Flask backend for serving predictions and a frontend to interact with the model.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Dataset](#dataset)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Model Training Process](#model-training-process)
- [Results](#results)
- [License](#license)

---

## Project Overview

The California Housing Price Prediction project aims to predict the median house price for a given location in California using various features such as:
- Median income
- Average number of rooms
- Population
- Latitude and Longitude
- House age, etc.

This project demonstrates:
- Data preprocessing and model training using scikit-learn.
- Flask for serving predictions via a REST API.
- React for the frontend UI.

---

## Technologies Used

- Python
- Flask
- Next.js
- scikit-learn
- pandas
- numpy
- pickle
- seaborn & matplotlib for visualization

---

## Dataset

The dataset used is the **California Housing Dataset**, available in scikit-learn. It contains features like:
- `MedInc`: Median income
- `HouseAge`: Average age of houses
- `AveRooms`: Average number of rooms per household
- `AveBedrms`: Average number of bedrooms per household
- `Population`: Population of the area
- `AveOccup`: Average occupancy
- `Latitude` and `Longitude`: Location information

The target variable (`Price`) represents the median house price in the region.

---

## Project Structure

```
.
├── app.py                         # Flask app for serving predictions
├── california_housing.pkl         # Serialized model file
├── scaler.pkl                     # Serialized scaler object
├── line regression model.ipynb    # Jupyter Notebook for model training
├── README.md                      # Project documentation
├── frontend/                      # React/Next.js frontend
    ├── components/
    ├── pages/
    └── ...
```

---

## Setup and Installation

### Prerequisites
- Python 3.8 or higher
- Node.js and npm for the frontend
- pip for Python package management

## Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayush272002/California-House-Pricing.git
   cd California-House-Pricing
   ```

2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # For Linux/Mac
   venv\Scripts\activate      # For Windows
   ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask app:
   ```bash
   python app.py
   ```

### Docker Support

### Building and Running the Backend with Docker

The backend application is Dockerized for ease of deployment and scalability. Below are the steps to build and run the backend using Docker:

1. Navigate to the Dockerfile directory:
   ```bash
   cd docker
   ```

2. Build the Docker image:
   ```bash
   docker build -t california-housing-backend .
   ```

3. Run the Docker container:
   ```bash
   docker run -p 5000:5000 california-housing-backend
   ```

   - The Flask application will be accessible at `http://localhost:5000`.

4. (Optional) Run the container in detached mode:
   ```bash
   docker run -d -p 5000:5000 california-housing-backend
   ```

### Frontend Setup
1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

### Backend
- The backend server runs on `127.0.0.1:5000`.
- Make predictions by sending a POST request to `/predict` or `/predict_api` with JSON data.

### Frontend
- Access the frontend at `http://localhost:3000`.
- Fill in the form fields and click the "Predict House Price" button to get predictions.

---

## Endpoints

### `/predict_api` (POST)
Make predictions by sending a JSON payload:
```json
{
    "data": {
        "MedInc": 8.3,
        "HouseAge": 41,
        "AveRooms": 6.5,
        "AveBedrms": 1.1,
        "Population": 850,
        "AveOccup": 3.4,
        "Latitude": 37.88,
        "Longitude": -122.23
    }
}
```

Response:
```json
4.143334414925613
```

### `/predict` (POST)
Another endpoint for making predictions:
```json
{
    "MedInc": 8.3,
    "HouseAge": 41,
    "AveRooms": 6.5,
    "AveBedrms": 1.1,
    "Population": 850,
    "AveOccup": 3.4,
    "Latitude": 37.88,
    "Longitude": -122.23
}
```

Response:
```json
{
    "prediction": 4.143334414925613
}
```

---

## Model Training Process

### Steps
1. Data exploration and preprocessing:
   - Checked for missing values.
   - Scaled features using `StandardScaler`.
   - Split the dataset into training and testing sets.

2. Model Training:
   - Trained a linear regression model using scikit-learn.

3. Evaluation:
   - Evaluated using metrics like Mean Absolute Error (MAE), Mean Squared Error (MSE), and R².

4. Serialization:
   - Saved the model and scaler using `pickle`.

### Key Metrics
- MAE: 0.533
- MSE: 0.467
- RMSE: 0.683
- R²: 0.61

---

## Results

- The linear regression model predicts the median house price with reasonable accuracy based on the provided input features.
- Further improvements can be achieved by trying more complex models or feature engineering.

---

## License

This project is licensed under the MIT License. See `LICENSE` for details.