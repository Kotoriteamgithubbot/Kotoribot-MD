FROM node:lts-buster

COPY package.json .

RUN npm install
COPY . .

EXPOSE 5000

CMD ["node", "main.js"]
