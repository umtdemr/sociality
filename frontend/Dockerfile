FROM node:15.4.0-alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY yarn.lock .

RUN yarn

RUN yarn install

COPY . .
