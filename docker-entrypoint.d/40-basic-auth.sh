#!/bin/sh
# Configure HTTP Basic Auth from environment variables at container start.
#
# Credentials never live in the image: set BASIC_AUTH_PASSWORD (and optionally
# BASIC_AUTH_USER) on the running container to gate the WHOLE site — pages,
# images and JavaScript bundles alike, since the check runs in nginx before any
# file is served. This mirrors the single shared password used on
# pax-interactive-history, adapted to this project's static nginx deployment.
#
# No BASIC_AUTH_PASSWORD -> the site is served publicly, so the same image can
# go live at launch by simply clearing the variable (no rebuild needed).
#
# This script is picked up automatically by the stock nginx entrypoint, which
# runs every /docker-entrypoint.d/*.sh before starting nginx.
set -eu

htpasswd_file="/etc/nginx/.htpasswd"
auth_conf="/etc/nginx/auth.conf"

if [ -n "${BASIC_AUTH_PASSWORD:-}" ]; then
  user="${BASIC_AUTH_USER:-familienbarometer}"

  # apr1 (htpasswd default) is implemented natively by nginx, so it works
  # regardless of the container libc's crypt() support.
  htpasswd -bc "$htpasswd_file" "$user" "$BASIC_AUTH_PASSWORD" >/dev/null 2>&1
  chmod 644 "$htpasswd_file"

  {
    echo 'auth_basic "Familienbarometer";'
    echo "auth_basic_user_file ${htpasswd_file};"
  } >"$auth_conf"

  echo "[basic-auth] enabled (user: ${user}) — the site is private."
else
  # Public: empty include, and make sure no stale password file lingers.
  : >"$auth_conf"
  rm -f "$htpasswd_file"
  echo "[basic-auth] BASIC_AUTH_PASSWORD not set — the site is PUBLIC."
fi
