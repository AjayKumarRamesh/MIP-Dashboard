FROM node:latest

WORKDIR /app

COPY package.json ./ 

RUN npm install

COPY . .

RUN chown -R node.node /app/node_modules

RUN chmod -R 777 /app

RUN set -ex && apt-get -y upgrade
    
RUN rm -rf /etc/mysql/

RUN apt-get update && apt-get install openssl

CMD ["npm", "start"]
