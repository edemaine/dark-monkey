// ==UserScript==
// @name         Workflowy Black
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extra dark mode for workflowy.com (use with Dark theme)
// @author       Erik Demaine
// @match        http*://workflowy.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=workflowy.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.innerHTML = `
      body, .header, .page {
        background-color: black !important
      }
      .leftBar > div {
        background-color: #111 !important
      }
    `;
    document.head.appendChild(style);
})();
