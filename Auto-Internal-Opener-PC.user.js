// ==UserScript==
// @name        Auto Internal Opener for Athena Chats V1.13 (Mac)
// @namespace   Violentmonkey Scripts
// @match       https://athena.shopify.io/*
// @grant       none
// @version     1.13
// @author      Caleb Lee (Credits to Nicholas Bulmer & Renee Mundie)
// @description 22/04/2024, 12:04:56 - Use Shift + Control + E
// ==/UserScript==


(function () {
  function openSelectedButtons() {
    const buttons = document.querySelectorAll(".Polaris-Button_r99lw");
    console.log('Searching for specified buttons:', buttons);
    buttons.forEach((button) => {
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
