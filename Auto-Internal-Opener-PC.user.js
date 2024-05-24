// ==UserScript==
// @name        Auto Internal Opener for Beacon Athena V1.15 (PC)
// @namespace   
// @match       https://beacon.shopify.io/*
// @grant       none
// @version     1.15
// @author      Caleb Lee (Credits to Nicholas Bulmer & Renee Mundie)
// @description 22/05/2024 - Use Shift + Control + E
// ==/UserScript==


(function () {
  function openSelectedButtons() {
    // Selecting all button elements since we are not relying on specific class names
    const buttons = document.querySelectorAll("button");
    console.log('Searching for specified buttons:', buttons);
    buttons.forEach(button => {
      if (button.innerHTML.includes("Storefront") ||
          button.innerHTML.includes("Admin") ||
          button.innerHTML.includes("Internal")) {
        console.log(`Button with text "${button.innerHTML}" clicked.`);
        button.click();
      }
    });
  }

  // Event listener for keydown - trigger on 'Shift' + 'Control' + 'E'
  document.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.ctrlKey && event.key === 'E') {
      openSelectedButtons();
    }
  });
})();
