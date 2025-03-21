# Use Node.js lightweight image
FROM node:18-alpine  

# Set the working directory
WORKDIR /app  

# Copy package.json files for dependency installation
COPY package*.json ./  
RUN npm install  

# Copy remaining files
COPY . .  

# Expose port 3003
EXPOSE 3003  

# Start the Comment Service
CMD ["node", "src/index.js"]  
