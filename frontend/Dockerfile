FROM node:15.4.0-alpine

WORKDIR /usr/src/frontend

ENV PATH /usr/src/frontend/node_modules/.bin:$PATH

COPY package.json .
COPY yarn.lock .

RUN yarn

RUN yarn install

COPY . .
