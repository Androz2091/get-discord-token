// ==UserScript==
// @name         GetDiscordTokenManInTheMiddle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gets your Discord token for you
// @author       Androz2091
// @match        https://discordapp.com/channels/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict'
    let auth = null;
    function showAuth(value){
        auth = value;
        prompt("Your token:", auth);
    }
    // Create an alias for the setRequestHeader method
    XMLHttpRequest.prototype.wrappedSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
    // Update the setRequestHeader method
    XMLHttpRequest.prototype.setRequestHeader = function(header, value){
        // Save the token
        if(header === "Authorization" && !auth) showAuth(value);
        // Execute the veritable setRequestHeader function
        this.wrappedSetRequestHeader(header, value);
    }
})();
