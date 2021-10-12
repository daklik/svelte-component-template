FROM node:14.15.3-alpine3.12

# Copy component sources
WORKDIR /app
COPY ./src /app/src
COPY package*.json /app/
RUN chown -R node: /app

USER node

# Install storybook
RUN npx sb init

EXPOSE 6006

CMD ["npm", "run", "storybook"]