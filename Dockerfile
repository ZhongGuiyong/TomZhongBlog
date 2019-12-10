FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
# COPY package.json /usr/src/app/
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install
EXPOSE 3000
CMD [ "yarn", "dev" ]