// ==UserScript==
// @name        Auto Internal Opener for Athena Chats V1.11
// @namespace   Violentmonkey Scripts
// @match       https://athena.shopify.io/*
// @grant       none
// @version     1.11
// @author      Caleb Lee
// @description 22/04/2024, 12:04:56
// ==/UserScript==


(function () {
  // Flag to keep track of whether Shift and Command keys are down
  let shiftCmdDown = false;

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

  // Event listener for keydown - to capture all keys pressed together
  document.addEventListener("keydown", function (event) {
    // Check if both Shift and Command keys are held down
    if (event.shiftKey && event.metaKey) {
      shiftCmdDown = true;
    }

    // When "1" is pressed while Shift and Command are down, call the function
    if (shiftCmdDown && event.key === '1') {
      openButtonInNewTab();
    }
  });

  // Event listener for keyup - to reset flags when keys are released
  document.addEventListener("keyup", function (event) {
    // Reset the shiftCmdDown flag if Shift or Command are released
    if (event.key === 'Shift' || event.key === 'Meta') {
      shiftCmdDown = false;
    }
  });
})();
