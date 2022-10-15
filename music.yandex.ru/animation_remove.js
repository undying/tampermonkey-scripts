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
    document.querySelectorAll(".rup__animation").forEach(el => el.remove());

    const target = document.querySelector('.centerblock');
    const config = { attributes: true, childList: true, subtree: true };

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                console.log('A child node has been added or removed.');
                document.querySelectorAll(".rup__animation").forEach(el => el.remove());
            }
        });
    });
    observer.observe(target, config);
})();
