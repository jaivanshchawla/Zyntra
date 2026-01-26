#!/bin/bash

# Zyntra Deployment Script for Vercel
# This script automates the deployment of Zyntra to Vercel

set -e

echo "🚀 Zyntra Deployment Script"
echo "=============================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️  Vercel CLI not found. Installing...${NC}"
    npm i -g vercel
fi

echo -e "${BLUE}1️⃣  Building project locally...${NC}"
npm run build

echo -e "${GREEN}✓ Build successful!${NC}"

echo -e "${BLUE}2️⃣  Deploying to Vercel...${NC}"

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo -e "${YELLOW}Please log in to Vercel:${NC}"
    vercel login
fi

# Deploy the project
echo -e "${BLUE}Deploying to production...${NC}"
vercel --prod

echo -e "${GREEN}✓ Deployment complete!${NC}"
echo -e "${BLUE}Your site is live! Check your Vercel dashboard for the URL.${NC}"
