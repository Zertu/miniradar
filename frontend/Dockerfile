FROM node:10-alpine
RUN mkdir -p /home/Service
WORKDIR /home/Service   
COPY . /home/Service 
RUN npm install --no-bin-links &&  npm i @vue/cli-service
EXPOSE 4000
CMD npx vue-cli-service serve
