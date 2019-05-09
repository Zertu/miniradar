FROM node:10-alpine
RUN mkdir -p /home/Service
WORKDIR /home/Service   
COPY . /home/Service 
RUN npm install  --production --no-bin-links
EXPOSE 7001
CMD ["npm", "start"]
