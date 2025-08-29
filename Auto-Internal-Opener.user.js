// ==UserScript==
// @name        Auto Internal Opener for Beacon Athena V1.16 (Mac/Win/Linux)
// @namespace
// @match       https://beacon.shopify.io/*
// @grant       none
// @version     1.16
// @author      Caleb Lee (Credits to Nicholas Bulmer & Renee Mundie)
// @description 28/08/2025
// @run-at      document-idle
// ==/UserScript==

(function () {
  const TARGET_LABELS = ["Internal", "Admin", "Storefront"];

  function detectOS() {
    const platform = (navigator.platform || "").toLowerCase();
    if (platform.includes("mac")) return "macOS";
    if (platform.includes("win")) return "Windows";
    if (platform.includes("linux")) return "Linux";
    return "Unknown";
  }

  const os = detectOS();
  console.log(`[Beacon Helper] Detected OS: ${os}`);

  function findButtons() {
    return Array.from(document.querySelectorAll("button"));
  }

  function labelFor(button) {
    return (button.textContent || button.innerText || "").trim();
  }

  function clickThreeTargets() {
    const buttons = findButtons();
    console.log("[Beacon Helper] Scanning buttons to click:", buttons.length);

    buttons.forEach((button) => {
      const text = labelFor(button);
      if (button.dataset && button.dataset.openAll === "true") return; // don't click our injected button
      if (TARGET_LABELS.some((t) => text.includes(t))) {
        console.log(`[Beacon Helper] Clicking: ${text}`);
        button.click();
      }
    });
  }

  function findAnyTargetButton() {
    return findButtons().find((b) =>
      TARGET_LABELS.some((t) => labelFor(b).includes(t))
    );
  }

  function insertOpenAllButton() {
    const anchorBtn =
      findButtons().find((b) => labelFor(b).includes("Internal")) ||
      findButtons().find((b) => labelFor(b).includes("Admin")) ||
      findButtons().find((b) => labelFor(b).includes("Storefront"));

    if (!anchorBtn) return false;

    const container = anchorBtn.parentElement;
    if (!container) return false;

    if (container.querySelector('[data-open-all="true"]')) return true; // already added

    // Create a new button styled like the existing ones (copy className)
    const openAllBtn = document.createElement("button");
    openAllBtn.type = "button";
    openAllBtn.textContent = "Open All";
    openAllBtn.dataset.openAll = "true";
    openAllBtn.className = anchorBtn.className;

    // Keep simple spacing if needed
    openAllBtn.style.marginLeft = openAllBtn.style.marginLeft || "6px";

    openAllBtn.addEventListener("click", (e) => {
      e.preventDefault();
      clickThreeTargets();
    });

    container.appendChild(openAllBtn);
    console.log("[Beacon Helper] 'Open All' button inserted.");
    return true;
  }

  // Add the button when the UI appears and on future updates
  const observer = new MutationObserver(() => {
    insertOpenAllButton();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  // Try immediately as well
  insertOpenAllButton();

  // Keyboard shortcut: Shift + Meta + 1 (macOS) or Shift + Ctrl + 1 (Win/Linux)
  document.addEventListener("keydown", (event) => {
    const macCombo = os === "macOS" && event.shiftKey && event.metaKey && event.key === "1";
    const otherCombo = (os === "Windows" || os === "Linux") && event.shiftKey && event.ctrlKey && event.key === "1";
    if (macCombo || otherCombo) {
      console.log(`[Beacon Helper] Shortcut detected (${os}). Triggering 'Open All'.`);
      clickThreeTargets();
    }
  });
})();// ==UserScript==
// @name New Script
// @namespace OrangeMonkey Scripts
// @grant none
// ==/UserScript==
