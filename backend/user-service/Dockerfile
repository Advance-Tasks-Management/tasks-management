# Use a lightweight Node.js image
FROM node:18-alpine  

# Set the working directory
WORKDIR /app  

# Install pnpm globally instead of npm
RUN npm install -g pnpm

# Copy package files first (for better caching)
COPY package*.json ./  
COPY pnpm-lock.yaml ./ 

# Install dependencies with pnpm
RUN pnpm install  

# Copy the rest of the service files
COPY . .  

# Expose port 3001 for this service
EXPOSE 3001  

# Start the User Service
CMD ["node", "src/index.js"]