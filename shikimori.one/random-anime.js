// ==UserScript==
// @name         select random anime
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://shikimori.one/undying/list/anime
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shikimori.one
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  let t = document.getElementsByClassName("b-table list-lines");
  for(let i of t){
    let l = i.rows.length;
    if(l < 4){
      continue;
    }

    let min = 2;
    let max = l-1;

    let r = Math.floor(Math.random() * (max - min) + min);
    i.rows[r].style.backgroundColor = 'yellow';
  }

})();

