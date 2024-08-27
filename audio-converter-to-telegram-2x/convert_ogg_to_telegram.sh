#!/bin/bash

# Define the input and output directories
INPUT_DIR="/mnt/c/Users/lucas/Downloads/Telegram Desktop"   # Change this to your folder containing .ogg files
OUTPUT_DIR="/mnt/c/Users/lucas/Downloads/Telegram Desktop/Converted" # Folder where converted files will be saved

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "FFmpeg is not installed. Please install FFmpeg to proceed."
    echo "To install FFmpeg, run: sudo apt update && sudo apt install ffmpeg"
    exit 1
fi

# Create the output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Loop through all .m4a files in the input directory
for file in "$INPUT_DIR"/*.m4a; do
    # Extract the filename without the directory
    filename=$(basename "$file")
    # Define the output file path
    output_file="$OUTPUT_DIR/$filename"

    # Convert the file with the required metadata
    ffmpeg -i "$file" -c:a libopus -b:a 64k -ar 48000 -ac 1 \
           -metadata:s:a:0 title="Telegram Voice Message" \
           -metadata:s:a:0 encoder="opus" "$output_file"

    echo "Converted: $file -> $output_file"
done

echo "Conversion completed!"
