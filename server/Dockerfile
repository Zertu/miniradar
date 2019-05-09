FROM node:10-alpine
RUN mkdir -p /home/Service
WORKDIR /home/Service   
COPY . /home/Service 
RUN npm install
EXPOSE 7001
CMD ["npm", "start"]
