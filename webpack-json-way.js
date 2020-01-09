// ==UserScript==
// @name         GetDiscordTokenWebpackJSON
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Allows you to retrieve your user token for reference.
// @author       Androz2091
// @match        https://discordapp.com/channels/*
// @run-at       document-start
// ==/UserScript==

(function () {
   'use strict';
    window.addEventListener ("DOMContentLoaded", function() {
        prompt("Your token: ", Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getToken!==void 0).exports.default.getToken());
    });
})();
