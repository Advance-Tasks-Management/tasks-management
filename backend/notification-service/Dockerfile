# Use Node.js lightweight image
FROM node:18-alpine  

# Set the working directory
WORKDIR /app  
RUN npm install -g pnpm

# Copy package.json files for dependency installation
COPY package*.json ./  
COPY pnpm-lock.yaml ./ 
RUN pnpm install  

# Copy remaining files
COPY . .  

# Expose port 3005
EXPOSE 3005  

# Start the Notification Service
CMD ["node", "src/index.js"]  
