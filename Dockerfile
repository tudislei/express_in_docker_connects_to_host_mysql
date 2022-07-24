FROM node:lts-alpine3.15
WORKDIR /usr/src/app/test_express
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
#ENV API_PORT=8080
EXPOSE 8080
COPY . .
CMD [ "node", "server.js" ]