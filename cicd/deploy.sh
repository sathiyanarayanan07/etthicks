#!/bin/bash
set -e

# ================================
# CONFIG
# ================================
SERVER_USER="thirdvizion-etthicks"
SERVER_HOST="213.210.21.150"
DEPLOY_DIR="/home/thirdvizion-etthicks/htdocs/etthicks.thirdvizion.com"
DIST_DIR="../dist"

echo "🚀 Deploying frontend as ${SERVER_USER}"
echo "➡ Target: ${SERVER_USER}@${SERVER_HOST}:${DEPLOY_DIR}"

# ================================
# VALIDATION
# ================================
if [ ! -d "$DIST_DIR" ]; then
  echo "❌ ERROR: dist/ directory not found. Run build first."
  exit 1
fi

# ================================
# DEPLOY
# ================================
rsync -avz --delete \
${DIST_DIR}/ \
${SERVER_USER}@${SERVER_HOST}:${DEPLOY_DIR}

echo "✅ Deployment completed successfully"
