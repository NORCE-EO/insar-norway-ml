#!/bin/bash
# Transcode earth-loop-1.mov to web-friendly MP4 and WebM for background video.
# Run from project root: ./assets/video/transcode.sh
# Requires: ffmpeg (brew install ffmpeg)
#
# GitHub limit: 100 MB per file. Target: ~5-15 MB so it loads quickly.

set -e
SRC="assets/video/earth-loop-1.mov"
OUT_MP4="assets/video/earth-loop.mp4"
OUT_WEBM="assets/video/earth-loop.webm"

if [ ! -f "$SRC" ]; then
  echo "Source not found: $SRC"
  exit 1
fi

echo "Transcoding $SRC..."
echo ""

# MP4: 720p, H.264, ~2 Mbps, typical 10-20 s loop → ~5 MB
ffmpeg -i "$SRC" -vf "scale=-2:720" -c:v libx264 -preset medium -crf 28 \
  -an -movflags +faststart -t 20 -y "$OUT_MP4"
echo "Created $OUT_MP4 ($(du -h "$OUT_MP4" | cut -f1))"

# WebM: 720p, VP9, smaller
ffmpeg -i "$SRC" -vf "scale=-2:720" -c:v libvpx-vp9 -crf 35 -b:v 0 \
  -an -t 20 -y "$OUT_WEBM"
echo "Created $OUT_WEBM ($(du -h "$OUT_WEBM" | cut -f1))"

echo ""
echo "Done. Add earth-loop.mp4 and earth-loop.webm to git."
