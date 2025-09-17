**Auto Internal Opener for Beacon Athena**


---

IMPORTANT NOTE: ViolentMonkey is deprecated. Follow instructions below and use OrangeMonkey instead.

**1) Install OrangeMonkey**
* Open the Chrome Web Store and install here: [OrangeMonkey – Userscript Manager.](https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf?hl=en)
* Click Add to Chrome, then confirm Add extension.

**2) Pin the extension**
* Click the Extensions (puzzle) icon in the top‑right of Chrome.
* Find OrangeMonkey and **click the pin icon** to keep it on your toolbar.
  
**3) Ensure OrangeMonkey is enabled**
* Click the OrangeMonkey icon to open it. If you don’t see it, go to chrome://extensions/ and toggle OrangeMonkey On.
* If you still have Violentmonkey installed, disable it to avoid scripts running twice

**4) Install the script**
* Install script for **Mac** using this **[link](https://github.com/calebvlee/Athena-Internal-Opener/raw/main/Auto-Internal-Opener.user.js)**
* Install script for **PC/Chromebook** using this **[link](https://github.com/calebvlee/Athena-Internal-Opener/raw/main/Auto-Internal-Opener-PC.user.js)**

**5) Configure Chrome**
* Restart Chrome or refresh your Beacon Athena tab so OrangeMonkey detects the script.
* Go to chrome://extensions/ and enable Developer Mode 

**6) Allow pop‑ups for Beacon Athena**
* Open Beacon Athena (beacon.shopify.io) in a tab.
* In the address bar, click the site info (lock) or the pop‑up blocked icon.
* Set “Pop‑ups and redirects” to Allow for this site.

**7) Use the script**
* Keyboard shortcut to trigger:
    * **Mac**: Shift + Command + 1
    * **PC/Chromebook**: Shift + Control + E
* Or Click on **‘Open All**’ button
* This opens three pages (“Storefront”, “Admin”, and “Internal”) in new tabs from your active Athena chat.

**Troubleshooting**
* Nothing happens:
    * Confirm the script shows as Enabled in OrangeMonkey.
    * Refresh the Beacon Athena page after installing.
    * Verify pop‑ups are Allowed for beacon.shopify.io.
    * Double check that Chrome Extensions are in Developer Mode
    * Disable other userscript managers (e.g., Violentmonkey) to prevent conflicts.
* Only some tabs open:
    * Check your script’s @match/@include patterns cover the current Athena URL.
    * Ensure your keyboard shortcut isn’t overridden by another extension or Chrome shortcut.


---

View a demonstration of what the script does [here](https://shopify.click/0/p4e3o-qjc2c-55gt5-y3o1p-o31m1.gif). \
Any questions or issues reach out on slack [@shopidad](https://shopify.enterprise.slack.com/team/U03NZJQHSGZ) or [caleb.lee@shopify.com](mailto:caleb.lee@shopify.com)
