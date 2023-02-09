# GAS_WOW_Classic_AutoAssignment
Google Apps Script for importing Raid Helper JSON data to Spreadsheet. AutoAssigning players to RoleId/ClassRoleId and coloring players based on World of Warcraft Class Color. Using RaidHelpers color choices for classes.

Working example can be found in this Public shared Spreadsheet:
https://docs.google.com/spreadsheets/d/1jTN0zQCDNsanoSxYwognIV04Lg7BH80AvigdMbK0vfs/edit?usp=sharing
Under file menu choose "Copy" to download a copy to your Google Account.

## Google Apps Script
To add this into your own Spreadsheet/Document:
1. Go to Spreadsheet or Create a new one.
2. Under the file-menu Extensions choose 'Google Apps Script'
3. Create a new script file for each file in my repository. You can use a single file or do as me and spread them in several files.
4. Paste the content in your script files.

## Google Spreadsheet
Now create the sheets you need:
1. RaidData
2. Raiders
3. Assignments

### Optional sheets
1. MemberProfiles (map Discord user Id with WOW ingame Character using Signup Class, 1 class allowed per Discord User)
2. Maps - Contain URL links to Encounter images. My example uses Google Drive to host and share images.
3. Libs - Contains URL links to Abilities and Class related images. Use which ever image source you want and is allowed to.
