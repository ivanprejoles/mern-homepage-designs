FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY client ./client
COPY python ./python

RUN npm run build

# Copy the server code directly to the final stage
COPY server ./server

WORKDIR /app/server

EXPOSE 3000

CMD [ "npm", "start" ]
