FROM node:23-alpine

WORKDIR /react

COPY ./react/ .
RUN npm ci

CMD ["npm", "run", "dev"]