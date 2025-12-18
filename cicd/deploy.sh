#!/bin/bash
set -e

# ================================
# CONFIG
# ================================
SERVER_USER="thirdvizion-etthicks"
SERVER_HOST="213.210.21.150"

# deploy everything INTO this folder
DEPLOY_DIR="/home/thirdvizion-etthicks/htdocs/etthicks.thirdvizion.com/frontend"

# project root (repo root)
PROJECT_ROOT=".."

echo "🚀 Deploying FULL PROJECT into frontend folder"
echo "➡ Target: ${DEPLOY_DIR}"

# ================================
# PREPARE TARGET FOLDER
# ================================
ssh ${SERVER_USER}@${SERVER_HOST} "mkdir -p ${DEPLOY_DIR}"

# ================================
# DEPLOY (NON-DESTRUCTIVE)
# ================================
rsync -avz \
--exclude ".git" \
--exclude "node_modules" \
--exclude "cicd@tmp" \
--exclude ".DS_Store" \
${PROJECT_ROOT}/ \
${SERVER_USER}@${SERVER_HOST}:${DEPLOY_DIR}

echo "✅ All files deployed successfully into frontend folder"
