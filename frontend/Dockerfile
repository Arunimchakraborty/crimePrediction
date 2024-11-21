# Use Node.js as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

# Copy the rest of the application files into the container
COPY . /app/

# Expose port 3000
EXPOSE 3000

# Run the React app
CMD ["npm", "start"]
