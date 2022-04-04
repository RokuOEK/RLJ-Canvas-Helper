// ==UserScript==
// @name         RLJ Template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Roku LEMMiNO/JPN Canvas Helper
// @author       Roku
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/RokuOEK/RLJ-Canvas-Helper/main/jmusmap2.png";
            i.style = "position: fixed;left: 0;top: 0;opacity: 0.8;image-rendering: pixelated;width: 2000px;height: 2000px;";
            return i;
        })())

    }, false);

}
