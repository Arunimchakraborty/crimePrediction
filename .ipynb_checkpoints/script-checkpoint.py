import numpy as np
import pandas as pd
import joblib
import warnings
warnings.filterwarnings("ignore", message="Trying to unpickle estimator KMeans from version")


def getCrimes(district, day, hour):
  
  df = pd.read_csv('editedDataSet.csv')

  df = df[df['DISTRICT_ID'] == f'{district}']
  
  df['Timestamp'] = pd.to_datetime(df['Timestamp'])
  df = df[df['Timestamp'].dt.dayofweek == day]
  df = df[df['Timestamp'].dt.hour == hour]
  
  return df.shape[0]

def getCluster(crimes):
  # Load the saved model from the file
  model = joblib.load('kmeans.pkl')
  data = np.array([crimes])
  data = data.reshape(-1, 1)
  label = model.predict(data)
  return label[0]
  
labels = ['High', 'Very Low', 'Normal', 'Low', 'Very High']
num_crimes = getCrimes(district=7, day=0, hour=13)
clusterLabel = getCluster(num_crimes)
print(labels[clusterLabel])