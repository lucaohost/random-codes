# Create the directory ~/tmp/slack-backup if it doesn't already exist
 sudo mkdir -p ~/tmp/slack-backup 
 # Copy the app.asar file from Slack's resources to the backup directory
 sudo cp /usr/lib/slack/resources/app.asar ~/tmp/slack-backup/ 
 # Copy the app.asar.unpacked directory from Slack's resources to the backup directory
 sudo cp -r /usr/lib/slack/resources/app.asar.unpacked ~/tmp/slack-backup/
 # Install npm (Node.js package manager)
 sudo apt install npm
 # Globally install the asar package to work with asar archives
 sudo npm install -g asar
 # Create a temporary directory for extracting the asar archive
 sudo mkdir /tmp/slack
 # Extract the contents of the app.asar archive into the /tmp/slack directory
 sudo asar extract /usr/lib/slack/resources/app.asar ~/tmp/slack
 # Remove the original app.asar file from Slack's resources directory
 sudo rm /usr/lib/slack/resources/app.asar
 # Remove the app.asar.unpacked directory from Slack's resources directory
 sudo rm -rf /usr/lib/slack/resources/app.asar.unpacked
 # Turn off blue dot notifications
 sudo sed -i 's/:t>0/:t<0/g' ~/tmp/slack/dist/main.*.js
 # Edit turn off red dot notifications
 # sudo sed -i 's/return i>0/return i<0/g' ~/tmp/slack/dist/main.*.js
 # Re-pack the modified Slack files back into an app.asar archive
 sudo asar pack ~/tmp/slack /usr/lib/slack/resources/app.asar