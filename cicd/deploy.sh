#!/bin/bash
set -e

# ================================
# CONFIG
# ================================
SERVER_USER="thirdvizion-etthicks"
SERVER_HOST="213.210.21.150"
DEPLOY_DIR="/home/thirdvizion-etthicks/htdocs/etthicks.thirdvizion.com"
PROJECT_ROOT=".."

echo "🚀 Deploying FULL project to server"
echo "➡ Target: ${SERVER_USER}@${SERVER_HOST}:${DEPLOY_DIR}"

# ================================
# DEPLOY (FULL PROJECT)
# ================================
rsync -avz --delete \
--exclude ".git" \
--exclude "node_modules" \
--exclude "dist" \
--exclude ".env.local" \
--exclude ".DS_Store" \
${PROJECT_ROOT}/ \
${SERVER_USER}@${SERVER_HOST}:${DEPLOY_DIR}

echo "✅ Full project deployed successfully"
