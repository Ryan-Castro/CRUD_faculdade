FROM node:23-alpine AS bulder

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000