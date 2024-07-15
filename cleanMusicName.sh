for file in *'[SPOTIFY-DOWNLOADER.COM]'*; do
    new_name=$(echo "$file" | sed 's/\[SPOTIFY-DOWNLOADER\.COM\] //')
    mv "$file" "$new_name"
done
