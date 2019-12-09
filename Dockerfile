FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install
COPY . /usr/src/app
EXPOSE 3000
CMD [ "yarn", "dev" ]