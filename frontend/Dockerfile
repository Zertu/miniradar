FROM node:10-alpine
RUN mkdir -p /home/Service
WORKDIR /home/Service   
COPY . /home/Service 
RUN npm install --no-bin-links && npm install -g @vue/cli
EXPOSE 4000
CMD ["npm", "start"]
