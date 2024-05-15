FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY client ./client
COPY python ./python

RUN npm run build

COPY server ./server

COPY --from=builder /app/node_modules ./app/node_modules 

WORKDIR /app/server

EXPOSE 3000

CMD [ "npm", "start" ]
