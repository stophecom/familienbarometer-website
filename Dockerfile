# Pinned by digest for reproducible, patch-auditable builds (bump via Dependabot)
FROM node:22-slim@sha256:d9f850096136edbc402debdd8729579a288aac64574ada0ff4db26b6ae58b0b2 AS build

ENV HUSKY=0
ENV NODE_OPTIONS=--max_old_space_size=4096

WORKDIR /app

# Trust the Pax root CA so the build can reach the registry through the TLS proxy
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*
COPY certificates/pax-ca-chain.crt /usr/local/share/ca-certificates/pax-rootca.crt
RUN update-ca-certificates
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/pax-rootca.crt

# Deterministic install from the lockfile; skip lifecycle scripts (supply-chain safety)
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# Copy source and build the static site
COPY . .
RUN npm run build

# --- Runtime ---
FROM nginx:stable-alpine@sha256:db30a8e56d06281277a92493b045cb034016e931706ca8e937cf0a7807815775 AS runtime

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
