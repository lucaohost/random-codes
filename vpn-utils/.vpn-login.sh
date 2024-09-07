#!/usr/bin/expect -f
# This file should be in ~/
# It's necessary install expect
# sudo apt-get install expect
spawn vpn-login -o
expect "password for yourUsername:"
send "yourPassword\r"
interact