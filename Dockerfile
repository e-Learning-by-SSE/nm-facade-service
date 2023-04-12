FROM node:alpine

ARG TOKEN

WORKDIR /app
RUN npm install -g @nestjs/cli
COPY package.json .npmrc .
RUN echo -e "\n//npm.pkg.github.com/:_authToken=$TOKEN" >> .npmrc
RUN npm install
# Overwrite .npmrc again to delete token
COPY .npmrc .
COPY . .

CMD ["npm", "run", "start:dev"]