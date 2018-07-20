// ==UserScript==
// @name         Link Hero
// @namespace    https://github.com/JefterRocha/Link-Hero
// @version      0.1
// @description  Remove the spaces from your friend's comment link on Facebook
// @author       Jefter de A. Rocha
// @match        https://www.facebook.com/*
// @updateURL    https://github.com/JefterRocha/Link-Hero/master/linkHero.min.meta.js
// @downloadURL  https://github.com/JefterRocha/Link-Hero/master/linkHero.min.user.js
// @supportURL   https://github.com/JefterRocha/Link-Hero/issues
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	const cp=t=>{const cp=document.createElement('input');cp.display='none';cp.value=t;document.body.appendChild(cp);cp.select();document.execCommand('copy')?console.log('copy successfully'):console.error('something bad happened');document.body.removeChild(cp)}
	document.body.addEventListener('mouseover',(e)=>{if(e.target.classList.contains('UFICommentActorAndBody')){e.target.addEventListener('click',()=>{const url=e.target.children[1].textContent.replace(/\s/g,'');if(/(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(url)){cp(url);alert('URL copied successfully\npaste in the search bar')}})}})
})();
