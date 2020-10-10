# [start dockerfile]
#
# Install
#
FROM node:10-alpine as install

WORKDIR /var/www/

COPY ./package* ./

RUN npm install -y

#
# Build
#
FROM install as build

# Copy built application modules
COPY --from=install /var/www/node_modules/ ./node_modules/

# Copy application files
COPY ./package.json ./package.json
COPY ./src/ ./src/
COPY ./config/ ./config/
COPY ./public/ ./public/

RUN npm install

CMD ["npm", "start"]
#[End Dockerfile]