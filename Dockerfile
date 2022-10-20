# Base on offical Node.js Alpine image
FROM node:latest

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Install yarn globally
RUN npm install --global yarn --force

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./
COPY ./yarn.lock ./

# Install dependencies
RUN yarn install


# Copy all files
COPY ./ ./

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER root