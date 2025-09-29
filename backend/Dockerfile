FROM node:alpine As build

WORKDIR /app

COPY package.json .

RUN npm install

# Stage 2: Production Stage (Final Image)
FROM node:alpine

# Set the working directory in the production stage
WORKDIR /app

RUN npm install -g nodemon

# Copy only the necessary files from the build stage
COPY --from=build /app /app

COPY . .

EXPOSE 5000

CMD ["nodemon", "server.js"]
