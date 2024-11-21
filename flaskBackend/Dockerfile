# Use an official Python runtime as a parent image
FROM python:3.12.7-slim

# Set the working directory in the container
WORKDIR /app

# Install dependencies from requirements.txt
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variables for Flask
ENV FLASK_APP=app.py
ENV FLASK_ENV=development

# Run Flask app
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
