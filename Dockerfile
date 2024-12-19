# Use a Node.js base image for building the Angular app
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project to the container
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a lightweight web server to serve the built app
FROM nginx:alpine
COPY --from=build /app/dist/<your-angular-app-name> /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
