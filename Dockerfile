# Stage 1: Build the React app
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve app with Nginx
FROM nginx:alpine

# Copy built files to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8080 (Google Cloud Run default)
EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
