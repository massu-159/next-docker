FROM node:16.19.0
WORKDIR /app/

CMD [ "yarn", "build" ]