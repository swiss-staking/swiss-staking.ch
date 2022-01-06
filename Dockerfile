#docker build -t swissstaking/webapp:v0.0.2 .
#docker run -p 8080:8080 swissstaking/webapp:v0.0.2
#docker push swissstaking/webapp:v1.0.0
FROM node:14.15.0-alpine3.12

WORKDIR /app

COPY package*.json ./

COPY . .

# build app for production with minification

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 8080

CMD [ "npm", "run", "start"]
