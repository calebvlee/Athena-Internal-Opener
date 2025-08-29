// ==UserScript==
// @name        Auto Internal Opener for Beacon Athena V1.16 (Mac/Win/Linux)
// @namespace
// @match       https://beacon.shopify.io/*
// @grant       none
// @version     1.18
// @author      Caleb Lee (Credits to Nicholas Bulmer & Renee Mundie)
// @description 29/08/2025
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

  // Ensure our button always uses the same rounding token as the app
  function ensureOpenAllStyles() {
    if (document.getElementById("open-all-style")) return;
    const style = document.createElement("style");
    style.id = "open-all-style";
    style.textContent = `
      button[data-open-all="true"]{
        border-radius: var(--radius-lg) !important;
      }
    `;
    document.head.appendChild(style);
  }

  ensureOpenAllStyles();

  function findButtons() {
    return Array.from(document.querySelectorAll("button"));
  }

  function labelFor(button) {
    return (button.textContent || button.innerText || "").trim();
  }

  function clickThreeTargets() {
    const buttons = findButtons();
    buttons.forEach((button) => {
      const text = labelFor(button);
      if (button.dataset && button.dataset.openAll === "true") return;
      if (TARGET_LABELS.some((t) => text.includes(t))) {
        button.click();
      }
    });
  }

  function insertOpenAllButton() {
    const anchorBtn =
      findButtons().find((b) => labelFor(b).includes("Internal")) ||
      findButtons().find((b) => labelFor(b).includes("Admin")) ||
      findButtons().find((b) => labelFor(b).includes("Storefront"));

    if (!anchorBtn) return false;

    const container = anchorBtn.parentElement;
    if (!container) return false;

    if (container.querySelector('[data-open-all="true"]')) return true;

    const openAllBtn = document.createElement("button");
    openAllBtn.type = "button";
    openAllBtn.textContent = "Open All";
    openAllBtn.dataset.openAll = "true";
    openAllBtn.className = anchorBtn.className;

    // Keep it visually separate from the grouped buttons so its own rounding applies
    openAllBtn.style.marginLeft = "8px";

    // Use the app's token for both corners
    openAllBtn.style.setProperty("border-radius", "var(--radius-lg)", "important");

    openAllBtn.addEventListener("click", (e) => {
      e.preventDefault();
      clickThreeTargets();
    });

    container.appendChild(openAllBtn);
    console.log("[Beacon Helper] 'Open All' button inserted.");
    return true;
  }

  const observer = new MutationObserver(() => {
    ensureOpenAllStyles();
    insertOpenAllButton();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  insertOpenAllButton();

  // Keyboard shortcut: Shift+Cmd+1 (macOS) or Shift+Ctrl+1 (Windows/Linux)
  document.addEventListener("keydown", (event) => {
    const macCombo = os === "macOS" && event.shiftKey && event.metaKey && event.key === "1";
    const otherCombo = (os === "Windows" || os === "Linux") && event.shiftKey && event.ctrlKey && event.key === "1";
    if (macCombo || otherCombo) {
      event.preventDefault();
      clickThreeTargets();
    }
  });
})();
