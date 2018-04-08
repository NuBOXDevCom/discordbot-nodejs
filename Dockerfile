FROM node:stretch

RUN apt update && apt dist-upgrade -y && apt install libtool-bin ffmpeg autoconf automake libsodium18 -y

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
