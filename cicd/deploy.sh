#!/bin/bash
set -e

SERVER_USER="thirdvizion-etthicks"
SERVER_HOST="213.210.21.150"
DEPLOY_DIR="/home/thirdvizion-etthicks/htdocs/etthicks.thirdvizion.com"
DIST_DIR="../dist"

echo "🚀 Deploying dist folder (keeping dist directory)"

# Validate dist exists
if [ ! -d "$DIST_DIR" ]; then
  echo "❌ dist folder not found"
  exit 1
fi

# IMPORTANT: NO trailing slash on dist
rsync -avz --delete \
${DIST_DIR} \
${SERVER_USER}@${SERVER_HOST}:${DEPLOY_DIR}

echo "✅ dist folder deployed successfully"
