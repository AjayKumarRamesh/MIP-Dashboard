FROM node:latest

WORKDIR /app

RUN chown -R node.node /app/node_modules

#COPY package.json ./
COPY . .

RUN npm install

CMD ["npm", "start"]