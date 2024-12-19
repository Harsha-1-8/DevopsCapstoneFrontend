# Use Node.js base image for building the Angular app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular project files into the container
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Use Nginx to serve the built app
FROM nginx:alpine
COPY --from=build /app/dist/DevopsCapstoneFrontend /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
