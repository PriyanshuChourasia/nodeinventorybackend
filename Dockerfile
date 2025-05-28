FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm ci 

COPY . .

COPY .env .env

RUN npx prisma generate

RUN npm run seed

EXPOSE 8007

CMD [ "npm","run","dev" ]