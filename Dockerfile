FROM node:latest

WORKDIR /app

#COPY package.json ./
COPY . .

RUN npm install

RUN chown -R node.node /app/node_modules

CMD ["npm", "start"]