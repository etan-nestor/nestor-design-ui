#!/bin/bash

# Script de déploiement automatisé pour Nestor Design UI
# Usage: ./scripts/deploy.sh [patch|minor|major]

set -e

# Couleurs pour les logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction de logging
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

# Vérifications préliminaires
log "🚀 Démarrage du déploiement Nestor Design UI"

# Vérifier que nous sommes sur la branche main
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    error "Vous devez être sur la branche 'main' pour déployer"
fi

# Vérifier qu'il n'y a pas de changements non commitées
if [ -n "$(git status --porcelain)" ]; then
    error "Il y a des changements non commitées. Veuillez les commiter avant de déployer"
fi

# Vérifier la connexion npm
if ! npm whoami > /dev/null 2>&1; then
    error "Vous devez être connecté à npm. Exécutez 'npm login'"
fi

# Type de version (patch par défaut)
VERSION_TYPE=${1:-patch}

if [ "$VERSION_TYPE" != "patch" ] && [ "$VERSION_TYPE" != "minor" ] && [ "$VERSION_TYPE" != "major" ]; then
    error "Type de version invalide. Utilisez: patch, minor, ou major"
fi

log "📦 Type de version: $VERSION_TYPE"

# Nettoyer les dépendances et réinstaller
log "🧹 Nettoyage des node_modules..."
rm -rf node_modules package-lock.json
npm install

# Lancer les tests de type
log "🔍 Vérification TypeScript..."
npm run lint

# Build de production
log "🏗️  Build de production..."
npm run build

# Vérifier que le build a créé les fichiers nécessaires
if [ ! -f "dist/index.js" ] || [ ! -f "dist/index.d.ts" ]; then
    error "Le build n'a pas créé les fichiers nécessaires dans dist/"
fi

log "✅ Build réussi"

# Test du package avec npm pack
log "📦 Test du package..."
npm pack --dry-run

# Récupérer la version actuelle
current_version=$(node -p "require('./package.json').version")
log "📋 Version actuelle: $current_version"

# Bump de version
log "⬆️  Bump de version ($VERSION_TYPE)..."
npm version $VERSION_TYPE --no-git-tag-version

# Nouvelle version
new_version=$(node -p "require('./package.json').version")
log "🎉 Nouvelle version: $new_version"

# Commit et tag
log "📝 Commit et tag de la nouvelle version..."
git add package.json
git commit -m "chore: bump version to $new_version"
git tag "v$new_version"

# Push vers le repo
log "⬆️  Push vers GitHub..."
git push origin main
git push origin "v$new_version"

# Publication sur npm
log "🚀 Publication sur npm..."
npm publish --access public

# Vérification de la publication
sleep 5
if npm view "@nestor-design/next@$new_version" version > /dev/null 2>&1; then
    log "✅ Publication réussie! Version $new_version disponible sur npm"
    log "📦 Installation: npm install @nestor-design/next@$new_version"
else
    error "❌ Échec de la publication sur npm"
fi

# Nettoyage
log "🧹 Nettoyage..."
rm -f nestor-design-next-*.tgz

log "🎉 Déploiement terminé avec succès!"
log "🔗 Package: https://www.npmjs.com/package/@nestor-design/next"
log "📖 Documentation: https://github.com/etan-nestor/nestor-design-ui#readme"

# Notifications optionnelles (décommentez si vous voulez)
# log "📢 Notifications..."
# echo "Nouvelle version $new_version déployée! 🚀" | # votre webhook Discord/Slack

log "✨ Happy coding!"