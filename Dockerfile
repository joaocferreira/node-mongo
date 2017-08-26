FROM node:latest

ENV PORT=3000

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app

# Bundle app source
COPY . .

EXPOSE $PORT

CMD [ "npm", "start" ]