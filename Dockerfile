FROM node:latest

WORKDIR /app

COPY package.json ./ 

RUN npm install

COPY . .

RUN npm run build

RUN chown -R node.node /app/node_modules

RUN chmod -R 777 /app

CMD ["npm", "start"]