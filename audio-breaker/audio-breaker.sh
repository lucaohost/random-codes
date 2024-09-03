for file in *.ogg; do
  ffmpeg -i "$file" -ss 00:00:00 -to 00:01:50 -c copy "${file%.ogg}_part1.ogg" &&
  ffmpeg -i "$file" -ss 00:01:50 -c copy "${file%.ogg}_part2.ogg"
done
