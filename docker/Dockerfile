FROM node:16-alpine
ARG HOST_PORT=3000
ENV HOST_PORT ${HOST_PORT}
RUN node --version
RUN yarn --version
RUN yarn global add serve
#RUN echo 'we are running some # of cool things'
#RUN pwd
RUN mkdir -p /var/run/application
#RUN ls /var/run/application
WORKDIR /var/run/application
#RUN pwd
#RUN ls
ADD entry.sh /entry.sh
RUN chmod +x /entry.sh

ENTRYPOINT /entry.sh "${HOST_PORT}"