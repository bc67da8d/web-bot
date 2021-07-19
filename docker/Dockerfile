FROM node:16-alpine
RUN node --version
RUN npm --version
RUN npm install -g npm@7.20.0
RUN npm install -g faker
RUN npm install -g nodemon
#RUN echo 'we are running some # of cool things'
#RUN pwd
RUN mkdir -p /var/run/application
#RUN ls /var/run/application
WORKDIR /var/run/application
#RUN pwd
#RUN ls
ADD entry.sh /entry.sh
RUN chmod +x /entry.sh

ENTRYPOINT /entry.sh