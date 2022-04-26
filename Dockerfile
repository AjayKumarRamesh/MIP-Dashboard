FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm run build

COPY . .

RUN chown -R node.node /app/node_modules

RUN chmod -R 777 /app

#CMD ["npm", "start"]

RUN npm start