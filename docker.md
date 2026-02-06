# Docker Setup for Synapse Project

This document explains the Docker configuration for the Synapse project, a full-stack application consisting of a MongoDB database, a Node.js backend API (using Fastify), and a Next.js frontend.

## Overview

The project uses Docker Compose to orchestrate three main services:
- **MongoDB**: Database service
- **Backend**: API server built with Node.js and Fastify
- **Frontend**: Web application built with Next.js

## Files

### docker-compose.yml

This file defines the multi-service Docker application. It includes:

- **mongodb**: Uses the official MongoDB 7 image. Runs on port 27017, with persistent data storage via a named volume `mongodb_data`. Initializes the database named `synapse`.
- **backend**: Builds from `./backend/Dockerfile`. Runs on port 3001. Depends on MongoDB. Environment variables include database URI, JWT secrets, and Node environment.
- **frontend**: Builds from `./frontend/Dockerfile`. Runs on port 3000. Depends on the backend. Sets the API URL for the frontend.

Services are connected via a custom bridge network `synapse-network` for inter-service communication.

### backend/Dockerfile

This is a multi-stage Dockerfile for the backend service:

- **Build stage**: Uses Node.js 20 Alpine image. Installs dependencies with pnpm, copies source code, and builds TypeScript.
- **Production stage**: Uses Node.js 20 Alpine image. Installs only production dependencies, copies built files, and sets up environment. Exposes port 3001 and runs the compiled server.

### frontend/Dockerfile

This is a multi-stage Dockerfile for the frontend service:

- **Build stage**: Uses Node.js 20 Alpine image. Installs dependencies with pnpm, copies source code, builds the Next.js app with telemetry disabled.
- **Production stage**: Uses Node.js 20 Alpine image. Installs production dependencies, copies built and static files. Exposes port 3000 and runs the Next.js server.

## Usage

To run the entire application:

1. Ensure Docker and Docker Compose are installed.
2. Set environment variables (JWT_SECRET, ADMIN_SECRET) in a `.env` file or via command line.
3. Run `docker-compose up --build` to build and start all services.
4. Access the frontend at http://localhost:3000 and backend API at http://localhost:3001.

To stop: `docker-compose down`

For development, you may want to run services individually or use volume mounts for live reloading.
