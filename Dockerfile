# Start with a base image that has Node installed (for compatibility)
FROM node:23.1.0-slim

# Install curl to download Bun
RUN apt-get update && apt-get install -y curl

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Set the working directory
WORKDIR /app

# Copy project files into the container
COPY . .

# Copy .env file into the container
COPY .env .env

# Install Bun dependencies
RUN bun install

# Expose the desired port
EXPOSE 3000

# Run the Bun server with dotenv
CMD ["dotenv", "-e", ".env", "bun", "start"]
