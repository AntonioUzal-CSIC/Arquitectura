FROM node:14.16.1

EXPOSE 3000

WORKDIR /usr/src

RUN mkdir public

COPY ./app.js .
COPY ./package.json .
COPY ./yarn.lock .
COPY ./json-context.jsonld ./public
COPY ./ngsi-context.jsonld ./public

RUN yarn install

CMD node app.js