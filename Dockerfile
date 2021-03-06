FROM node:16.13.1
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i
COPY . .
CMD [ "npm", "start" ]