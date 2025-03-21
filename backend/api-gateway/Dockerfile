# Use Node.js 18 Alpine as the base image (lightweight)
FROM node:18-alpine  

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json to install dependencies first (caching optimization)
COPY package*.json ./  

# Install dependencies
RUN npm install  

# Copy the rest of the application files to the container
COPY . .  

# Expose port 3000 for external access
EXPOSE 3000  

# Start the API Gateway service
CMD ["node", "src/index.js"]  
