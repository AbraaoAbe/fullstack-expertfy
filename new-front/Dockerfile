# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm audit fix

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app runs
EXPOSE 5173
