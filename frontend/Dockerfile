# Stage 1: Build Stage
FROM node:16-slim AS build

# Set the working directory in the build stage
WORKDIR /app

# Copy package.json and package-lock.json (if it exists) for dependency installation
COPY package*.json .

# Install dependencies (using --legacy-peer-deps if needed)
RUN npm cache clean --force && npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Stage 2: Production Stage (Final Image)
FROM node:16-slim

# Set the working directory in the production stage
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app /app

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
