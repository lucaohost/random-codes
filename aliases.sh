# Paste the code below in your ~/.bashrc
# Go directory with all Github Projects.
alias codes='cd /mnt/c/git/'

# Remember my Bashes.
alias rmb='ll ~/bashes'

# Remeber my Aliases.
alias rma="grep -A 1000000 -E ' My\s+Aliases' ~/.bashrc | tail -n +2"

# Close Terminal
alias x="exit"

# Turn off computer (doesn't work on WSL)
alias xx="poweroff"

# Update Aliases
alias update-aliases="/mnt/c/git/useful-examples/update-aliases.sh"
