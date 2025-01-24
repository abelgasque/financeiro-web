FROM node:12-alpine AS build

WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install --force

COPY . .

ENV APP_DEBUG=development
ENV APP_NAME=app
ENV APP_VERSION=1.0.0

RUN npm run build --configuration=production

FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html