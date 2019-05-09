FROM hub.c.163.com/nce2/nodejs:0.12.2  # Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service    # Bundle app source
COPY . /
RUN npm install
EXPOSE 7001
CMD npm start   
