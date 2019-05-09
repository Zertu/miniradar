FROM node:10-alpine
RUN mkdir -p /home/Service
WORKDIR /home/Service    # Bundle app source
COPY . /
RUN npm install
EXPOSE 7001
CMD npm start   
