# Use official Node.js image as the base
FROM node:20.11.1-alpine3.19

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ../CloudWave/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ../CloudWave .

# Expose the port your app runs on (change if not 5173 for Vite, 3000 for Next.js/CRA)
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]