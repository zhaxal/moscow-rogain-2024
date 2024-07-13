FROM --platform=linux/amd64 node:18-alpine


WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3005
CMD ["npm", "run", "preview"]