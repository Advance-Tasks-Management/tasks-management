# Use Node.js lightweight image
FROM node:18-alpine  

# Set the working directory
WORKDIR /app  

# Copy package files first
COPY package*.json ./  
RUN npm install  

# Copy all project files
COPY . .  

# Expose port 3004
EXPOSE 3004  

# Start the Team Service
CMD ["node", "src/index.js"]  
