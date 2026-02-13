#!/bin/bash
# Generate thumbnails for all images in assets/figs
# Use sips (macOS) to resize images.

TARGET_DIR="assets/figs"
MAX_SIZE=600

echo "Scanning $TARGET_DIR for images..."

find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.jpeg" \) | while read img; do
  # Skip existing thumbnails
  if [[ "$img" == */thumbnails/* ]]; then
    continue
  fi

  dir=$(dirname "$img")
  filename=$(basename "$img")
  thumb_dir="$dir/thumbnails"

  # Create thumbnails directory if not exists
  mkdir -p "$thumb_dir"

  # Create thumbnail if not exists
  if [ ! -f "$thumb_dir/$filename" ]; then
    echo "Creating thumbnail for $img..."
    # sips -Z maintains aspect ratio, max dimension MAX_SIZE
    sips -Z $MAX_SIZE "$img" --out "$thumb_dir/$filename" > /dev/null
  else
    :
  fi
done

echo "Thumbnails generation complete."
