FROM node:20
WORKDIR /althaf
COPY  index.html .    
COPY server.js .

COPY package*.json ./
RUN npm install

EXPOSE 3000
CMD ["node","server.js"]