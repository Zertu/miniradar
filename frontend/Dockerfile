FROM node:10-alpine
RUN mkdir -p /home/Service
WORKDIR /home/Service   
COPY . /home/Service 
RUN npm install --no-bin-links 
EXPOSE 4000
CMD ./node_modules/.bin/vue-cli-service serve
