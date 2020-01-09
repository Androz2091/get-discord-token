# Get Discord Token

3 ways to get your Discord token in 2020 from browser, bypassing the new security measures. Keep in mind that someone with your token can control your account.

The better way is the **Webpack JSON way** but if Discord changes it, it will be broken. The **Man in the middle way** will work for ever, because it uses basic XMLHttpRequest features.

## How-to
### 1. Log into [Discordapp](https://discordapp.com/activity) in browser
### 2. Install [Tampermonkey](https://tampermonkey.net/) ([guide](https://www.youtube.com/watch?v=cu4XeYtqXbM))
### 3. Add one of the scripts into Tampermonkey 
### 4. Load/refresh [Discordapp](https://discordapp.com/activity) in browser

---

###### (If this script/guide has worked for you, please star this. If it hasn't worked, leave a comment and I'll help you.)

## Explanations

### Man in the middle way

This script will use XMLHttpRequest to modify the setRequestHeader function, allowing you to intercept a call to this function. If the call contains an `Authorization` header, the script shows a prompt with the value.

### Webpack JSON way

This script uses the webpack json object and gets the token. Then, it shows a prompt with the value.

### Before storage clear

This script gets the token from the storage before it's cleared by Discord.

## Credits

Thanks to [FOCI-DEV](https://github.com/FOCI-DEV) who made the before-storage-clear-way.js file.
