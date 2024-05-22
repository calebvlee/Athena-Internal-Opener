// ==UserScript==
// @name        Auto Internal Opener for Beacon Athena V1.15 (Mac)
// @namespace   
// @match       https://beacon.shopify.io/*
// @grant       none
// @version     1.15
// @author      Caleb Lee (Credits to Nicholas Bulmer & Renee Mundie)
// @description 22/05/2024
// ==/UserScript==



(function () {
  function detectOS() {
    let platform = navigator.platform.toLowerCase();
    if (platform.includes('mac')) return 'macOS';
    if (platform.includes('win')) return 'Windows';
    if (platform.includes('linux')) return 'Linux';
    return 'Unknown';
  }

  const os = detectOS();
  console.log(`Detected OS: ${os}`);

  function openButtonInNewTab() {
    // Selecting all buttons since class names are unreliable
    const buttons = document.querySelectorAll("button");
    console.log('Attempting to open tabs for these buttons:', buttons);
    buttons.forEach(button => {
      if (button.innerHTML.includes("Internal") ||
          button.innerHTML.includes("Admin") ||
          button.innerHTML.includes("Storefront")) {
        console.log(`Clicking button with label: ${button.innerHTML}`);
        button.click();  // Simulate a click on the button
      }
    });
  }

  // Event listener for keydown
  document.addEventListener("keydown", function (event) {
    // Filtering event key based on the OS used to adapt modifier keys
    if ((os === 'macOS' && event.shiftKey && event.metaKey && event.key === '1') ||
        ((os === 'Windows' || os === 'Linux') && event.shiftKey && event.ctrlKey && event.key === '1')) {
      console.log(`Triggering button click for OS: ${os} with combination Shift + Modifier + 1`);
      openButtonInNewTab();  // Executes the function to open tabs
    }
  });
})();
