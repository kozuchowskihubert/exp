#!/usr/bin/env sh
# OPTIONAL: helper to add certs from public/certs into the repo and push.
# Use only if you're comfortable committing cert PDFs into source control.

set -euo pipefail
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

git add public/certs || true

echo "Committing certs to repo (if there are changes)..."
if git diff --cached --quiet; then
  echo "No changes to commit."
  exit 0
fi

git commit -m "chore: add/update certificates"

echo "Pushing to origin main (ensure you are on main and have upstream)..."
git push origin main

echo "Done."
