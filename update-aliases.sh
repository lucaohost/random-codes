#!/bin/bash
folder_before_script=$(pwd)

cd /mnt/c/git/useful-examples

echo "# Paste the code below in your ~/.bashrc" > aliases.sh

grep -A 1000000 -E ' My\s+Aliases' ~/.bashrc | tail -n +2 >> aliases.sh

git add aliases.sh > /dev/null 2>&1

git commit -m "Update aliases" > /dev/null 2>&1

git push origin master  > /dev/null 2>&1

cd "$folder_before_script" > /dev/null 2>&1