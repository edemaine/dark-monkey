// ==UserScript==
// @name         Gradescope Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Invert color of PDF viewer. Adjust brightness via -/+ keys.
// @author       Erik Demaine
// @match        https://www.gradescope.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gradescope.com
// @grant        none
// @license      MIT
// @website      https://github.com/edemaine/dark-monkey
// ==/UserScript==

(function() {
    let brightness = 1;
    const style = document.createElement('style');
    style.type = 'text/css';
    document.head.appendChild(style);

    const update = () => style.innerText = `.pv--viewer img, .pageThumbnail img { filter: invert(1) hue-rotate(180deg) brightness(${brightness}) }`;
    update();

    window.addEventListener('keydown', (e) => {
        if (e.target.nodeName === 'TEXTAREA') return;
        if (e.key === '+' || e.key === '=') {
            brightness += 0.1;
            update();
        } else if (e.key === '-' || e.key === '_') {
            brightness -= 0.1;
            if (brightness < 0.1) brightness = 0.1;
            update();
        }
    });
})();
