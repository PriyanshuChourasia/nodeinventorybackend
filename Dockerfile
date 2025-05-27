FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm ci 

COPY . .

EXPOSE 8007


RUN npx prisma generate

CMD [ "npm","run","dev" ]