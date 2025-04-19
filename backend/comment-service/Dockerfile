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

# Expose port 3003
EXPOSE 3003  

# Start the Comment Service
CMD ["node", "src/index.js"]  
