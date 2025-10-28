.PHONY: help install dev build start clean lint format test deploy

# Default target
help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make start      - Start production server"
	@echo "  make lint       - Run linter"
	@echo "  make format     - Format code"
	@echo "  make clean      - Remove build artifacts"
	@echo "  make deploy     - Deploy to production"
	@echo "  make commit     - Add, commit and push changes"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Start development server
dev:
	@echo "Starting development server..."
	npm run dev

# Build for production
build:
	@echo "Building for production..."
	npm run build

# Start production server
start:
	@echo "Starting production server..."
	npm run start

# Run linter
lint:
	@echo "Running linter..."
	npm run lint

# Format code
format:
	@echo "Formatting code..."
	npm run format || echo "No format script found"

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf .next
	rm -rf node_modules/.cache
	rm -rf out
	@echo "Clean complete!"

# Deploy to production
deploy: build
	@echo "Deploying to production..."
	git add -A
	@read -p "Enter commit message: " msg; \
	git commit -m "$$msg"
	git push
	@echo "Deployed successfully!"

# Quick commit and push
commit:
	@echo "Staging all changes..."
	git add -A
	@read -p "Enter commit message: " msg; \
	git commit -m "$$msg"
	git push
	@echo "Changes pushed successfully!"

# Git status
status:
	@echo "Git status:"
	git status

# Pull latest changes
pull:
	@echo "Pulling latest changes..."
	git pull

# Create new branch
branch:
	@read -p "Enter branch name: " name; \
	git checkout -b $$name
	@echo "Branch created and switched!"

# Run type check
typecheck:
	@echo "Running type check..."
	npx tsc --noEmit

# Full check before commit
check: lint typecheck build
	@echo "All checks passed!"
