#!/bin/bash

# Define the input and output directories
INPUT_DIR="/mnt/c/Users/lucas/Downloads/Slack Notes"   # Change this to your folder containing .ogg files
OUTPUT_DIR="/mnt/c/Users/lucas/Downloads/Slack Notes/Converted" # Folder where converted files will be saved

# Define the initial and final formats
INITIAL_FORMAT="m4a"   # Change this to the initial format of the input files
FINAL_FORMAT="ogg"     # Change this to the desired output format

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "FFmpeg is not installed. Please install FFmpeg to proceed."
    echo "To install FFmpeg, run: sudo apt update && sudo apt install ffmpeg"
    exit 1
fi

# Create the output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Check if the input directory exists and is not empty
if [[ ! -d "$INPUT_DIR" || -z "$(ls -A "$INPUT_DIR"/*.$INITIAL_FORMAT 2>/dev/null)" ]]; then
    echo "No .$INITIAL_FORMAT files found in the input directory ($INPUT_DIR)."
    exit 1
fi

# Loop through all files with the specified initial format in the input directory
for file in "$INPUT_DIR"/*.$INITIAL_FORMAT; do
    # Extract the base filename without the directory and extension
    base_filename=$(basename "$file" ".$INITIAL_FORMAT")
    # Define the output file path with the final format
    output_file="$OUTPUT_DIR/$base_filename.$FINAL_FORMAT"

    # Convert the file with the required metadata
    ffmpeg -i "$file" -c:a libopus -b:a 64k -ar 48000 -ac 1 \
           -metadata:s:a:0 title="Telegram Voice Message" \
           -metadata:s:a:0 encoder="opus" "$output_file"

    echo "Converted: $file -> $output_file"
done

echo "Conversion completed!"
