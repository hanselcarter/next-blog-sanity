# This Dockerfile sets up a Docker image for a Node.js application.
# It starts by using the official Node.js image from Docker Hub.
# The working directory inside the container is set to /app.
# The package.json and package-lock.json files are copied to the container,
# and the dependencies are installed using npm.
# The application source code is then copied to the container.
# The container exposes port 3000 to the host machine.
# Finally, the command to start the Node.js application is specified.
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]