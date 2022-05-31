FROM node:latest

WORKDIR /app

COPY package.json   /src/

RUN npm install
RUN npm i -g nodemon

CMD ["nodemon", "dev"]
