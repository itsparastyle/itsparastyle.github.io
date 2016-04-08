// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:8080/*
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    var onDomLoaded = function () {
        var result = document.evaluate('//*[@id="tasks"]/div[4]', 
            document.documentElement, null,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, 
            null);
                         
        if (result.snapshotLength > 0) {
                var task4 = result.snapshotItem(0);
                var result2 = document.evaluate("./a[2]",  task4, null,
                    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, 
                    null);
                if (result2.snapshotLength > 0 && 1) {
                    
                    if (new String(result2.snapshotItem(0).innerText).trim() == "Workspace") {
                        task4.style.display = "none;";
                        console.log("hide task4");                        
                    }
                }            
        }
    };
    onDomLoaded();
    document.addEventListener('DOMContentLoaded', onDomLoaded);
})();