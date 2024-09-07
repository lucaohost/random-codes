#!/bin/bash
# Function to check VPN status
vpns() {
    ~/.vpn-status.sh
}

# Function to connect to VPN
vpn() {
    ~/.vpn-login.sh
}

# Automatically connect vpn 1x at mornning and 1x at afternoon
VPN_LAST_RUN_MORNING="$HOME/.vpn_last_run_morning"
VPN_LAST_RUN_AFTERNOON="$HOME/.vpn_last_run_afternoon"
CURRENT_HOUR=$(date +%H)
if [ "$CURRENT_HOUR" -lt 13 ]; then
    if [ ! -f "$VPN_LAST_RUN_MORNING" ] || [ "$(date +%Y-%m-%d)" != "$(cat "$VPN_LAST_RUN_MORNING")" ]; then
        vpn
        date +%Y-%m-%d > "$VPN_LAST_RUN_MORNING"
    fi
else
    if [ ! -f "$VPN_LAST_RUN_AFTERNOON" ] || [ "$(date +%Y-%m-%d)" != "$(cat "$VPN_LAST_RUN_AFTERNOON")" ]; then
        vpn
        date +%Y-%m-%d > "$VPN_LAST_RUN_AFTERNOON"
    fi
fi