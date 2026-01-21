#!/usr/bin/env sh
set -euo pipefail
# Sync certificates from a central folder into the project's public/certs so Vite can serve them.

# Update SRC if your certs live somewhere else.
SRC="/Users/haos/hk-background/certs"
DST="$(cd "$(dirname "$0")/.." && pwd)/public/certs"

echo "Source: $SRC"
echo "Destination: $DST"

if [ ! -d "$SRC" ]; then
  echo "Source directory does not exist: $SRC"
  exit 1
fi

mkdir -p "$DST"

# Copy files (non-destructive - do not overwrite existing files)
for f in "$SRC"/*; do
  [ -e "$f" ] || continue
  base=$(basename "$f")
  if [ -e "$DST/$base" ]; then
    echo "Skipping existing file: $base"
  else
    echo "Copying $base -> $DST/"
    cp "$f" "$DST/"
  fi
done

echo "Sync complete. Destination contents:"
ls -la "$DST"
