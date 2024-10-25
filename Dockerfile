# Start with a base image that has Node installed (for compatibility)
FROM node:18-slim

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

# Install Bun dependencies
RUN bun install

# Set environment variables, which can be overridden in docker-compose.yml
ENV DATABASE_URL=""
ENV SERVER_PORT="3000"
ENV BUN_ENV="production"
ENV LOG_LEVEL="info"
ENV LOG_USE_COLORS="false"

# Expose the desired port
EXPOSE 3000

# Run the Bun server
CMD ["bun", "start"]
