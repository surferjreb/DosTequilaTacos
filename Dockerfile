FROM node:20

#Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm Install
# for production: RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "index.js"]
