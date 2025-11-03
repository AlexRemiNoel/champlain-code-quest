FROM node:20-alpine AS build
WORKDIR /app

COPY package.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm config set cache /root/.npm && \
    npm install --no-audit --no-fund

COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

ARG BUILD_DIR=build
COPY --from=build /app/${BUILD_DIR} /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=2s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
