FROM node:alpine

WORKDIR /app

COPY index.js package.json yarn.lock ./

RUN yarn

EXPOSE 3000

CMD ["node", "index.js"]