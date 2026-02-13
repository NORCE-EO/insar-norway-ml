#!/bin/bash
# Transcode earth-loop-1.mov to web-friendly MP4 and WebM for background video.
# Run from project root: ./assets/video/transcode.sh
# Requires: ffmpeg (brew install ffmpeg)
#
# GitHub limit: 100 MB per file.
# Target here is high-quality 1080p with efficient compression.

set -e
SRC="assets/video/earth-loop-1.mov"
OUT_MP4="assets/video/earth-loop.mp4"
OUT_WEBM="assets/video/earth-loop.webm"
SCALE_FILTER="scale=-2:1080:flags=lanczos"

if [ ! -f "$SRC" ]; then
  echo "Source not found: $SRC"
  exit 1
fi

echo "Transcoding $SRC..."
echo ""

# MP4: 1080p, H.264 high-profile. Full duration (no trim).
# `-preset slow` improves compression efficiency at the same visual quality.
ffmpeg -i "$SRC" -vf "$SCALE_FILTER" -c:v libx264 -preset slow -crf 22 \
  -pix_fmt yuv420p -profile:v high -level 4.1 -an -movflags +faststart -y "$OUT_MP4"
echo "Created $OUT_MP4 ($(du -h "$OUT_MP4" | cut -f1))"

# WebM: 1080p, VP9 quality mode. Full duration (no trim).
ffmpeg -i "$SRC" -vf "$SCALE_FILTER" -c:v libvpx-vp9 -b:v 0 -crf 31 \
  -row-mt 1 -deadline good -cpu-used 1 -an -y "$OUT_WEBM"
echo "Created $OUT_WEBM ($(du -h "$OUT_WEBM" | cut -f1))"

echo ""
echo "Done. Add earth-loop.mp4 and earth-loop.webm to git."
