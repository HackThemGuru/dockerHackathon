FROM node:10-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=80

CMD ["npm", "start"]