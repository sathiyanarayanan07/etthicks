#!/bin/bash
set -e

SERVER_USER="root"
SERVER_HOST="srv846031"
DEPLOY_DIR="/home/thirdvizion-etthicks/htdocs/etthicks.thirdvizion.com"

echo "🚀 Deploying frontend to ${SERVER_USER}@${SERVER_HOST}:${DEPLOY_DIR}"

rsync -avz --delete ../dist/ \
${SERVER_USER}@${SERVER_HOST}:${DEPLOY_DIR}

echo "✅ Deployment completed successfully"
