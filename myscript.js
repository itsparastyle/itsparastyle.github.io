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
                if (result2.snapshotLength > 0) {
                    
                    if (new String(result2.snapshotItem(0).innerText).trim() == "Workspace") {
                        task4.style.display = "none";
                        
                        console.log("hide task4");                        
                    }
                }            
        }
        document.body.style.display = "block";
    };

    if (window.location.pathname.split('/')[1] == 'job') {
        var style = document.createElement("style");
            document.head.appendChild(style); // must append before you can access sheet property
        var sheet = style.sheet;
        sheet.insertRule("body {display: none;}");
    }
    document.addEventListener('DOMContentLoaded', onDomLoaded);
})();