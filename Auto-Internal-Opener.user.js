// ==UserScript==
// @name        Auto Internal Opener for Athena Chats V1.13 (Mac)
// @namespace   Violentmonkey Scripts
// @match       https://athena.shopify.io/*
// @grant       none
// @version     1.13
// @author      Caleb Lee (Credits to Nicholas Bulmer & Renee Mundie)
// @description 22/04/2024, 12:04:56
// ==/UserScript==



(function () {
  // Function to detect OS
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
    const buttons = document.querySelectorAll(".Polaris-Button_r99lw");
    console.log('Opening tabs for these buttons:', buttons);
    buttons.forEach((button) => {
      if (
        button.innerHTML.includes("Internal") ||
        button.innerHTML.includes("Admin") ||
        button.innerHTML.includes("Storefront")
      ) {
        button.click();
      }
    });
  }

  // Event listener for keydown
  document.addEventListener("keydown", function (event) {
    if (os === 'macOS' && event.shiftKey && event.metaKey && event.key === '1') {
      console.log('Executing for macOS with Shift + Cmd + 1');
      openButtonInNewTab();
    } else if ((os === 'Windows' || os === 'Linux') && event.shiftKey && event.ctrlKey && event.key === '1') {
      console.log('Executing for Windows/Linux with Shift + Ctrl + 1');
      openButtonInNewTab();
    }
  });
})();
