FROM node:latest

WORKDIR /temp

#COPY package.json ./
COPY . .

RUN npm install

RUN chown -R node.node /temp/node_modules

RUN chmod -R 777 /temp

CMD ["npm", "start"]