# Use a lightweight Node.js image
FROM node:18-alpine  

# Set the working directory
WORKDIR /app  

# Copy package files and install dependencies
COPY package*.json ./  
RUN npm install  

# Copy all files to the container
COPY . .  

# Expose port 3002
EXPOSE 3002  

# Start the Task Service
CMD ["node", "src/index.js"]  
