// ==UserScript==
// @name         MIT WebSIS Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Dark mode for student.mit.edu
// @author       Erik Demaine
// @match        http*://student.mit.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mit.edu
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.innerHTML = `
      body, table, select, #registrarheadercontainer, #registrarmininav, #contentmini {
        background-color: black; background-image: none; color: white;
      }
      h1, h2 { color: #e68e8c; }
      h3, h4 { color: #ccc; }
      a:link, #registrarheadercontainer a:link { color: #4ca3ce; }
      a:visited, #registrarheadercontainer a:visited, a:active, #registrarheadercontainer a:active { color: #8cabba; }
      a:hover, #registrarheadercontainer a:hover { color: #ea4844; }
      img.registrarlogo, img[src="/cgi-gif/subpage_title_websis.gif"] { filter: invert(1) hue-rotate(180deg) brightness(1.5) }
    `;
    document.head.appendChild(style);
})();
