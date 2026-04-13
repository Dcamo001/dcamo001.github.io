#!/bin/bash
# Opens your site the same way GitHub Pages does (over http://), so CSS, images, and links all work.
# Double-click this file in Finder. Quit Terminal when you're done to stop the server.

cd "$(dirname "$0")" || exit 1
PORT=8765
echo "Starting preview at http://127.0.0.1:$PORT/"
echo "Close this window when finished."
(sleep 1 && open "http://127.0.0.1:$PORT/") &
exec python3 -m http.server "$PORT"
