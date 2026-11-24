# Pinned by digest for reproducible, patch-auditable builds (bump via Dependabot)
FROM node:25-slim@sha256:81db02c4b671288a03915da9534dbd54f96d0e7c24d80ccc54f5b36b2e684370 AS build

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

# htpasswd (apache2-utils) is used by the entrypoint to build the Basic Auth
# password file from env at container start.
RUN apk add --no-cache apache2-utils

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Default: no Basic Auth (public). 40-basic-auth.sh rewrites this from env at
# startup. Shipping a real file keeps nginx valid even if the script is skipped.
RUN printf '# Basic Auth is configured at runtime by 40-basic-auth.sh\n' > /etc/nginx/auth.conf

# Runs before nginx via the stock nginx entrypoint (/docker-entrypoint.d/*.sh).
COPY docker-entrypoint.d/40-basic-auth.sh /docker-entrypoint.d/40-basic-auth.sh
RUN chmod +x /docker-entrypoint.d/40-basic-auth.sh

EXPOSE 8080
