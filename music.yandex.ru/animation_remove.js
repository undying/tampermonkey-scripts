// ==UserScript==
// @name         yandex.music_animation_remove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://music.yandex.ru/home
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        document.querySelectorAll(".rup__animation").forEach(el => el.remove());
}, false);
})();
