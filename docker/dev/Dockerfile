FROM node:18-alpine

WORKDIR /app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose development port
EXPOSE 3000

# Development command
CMD ["npm", "run", "dev"] 