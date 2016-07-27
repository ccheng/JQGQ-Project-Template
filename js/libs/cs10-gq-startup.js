"use strict";
/*
 * Copyright (c) 2012, 2016 Carson Cheng. All rights reserved.
 * The use and distribution terms for this software are covered by the
 * Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
 * which can be found in the file EPL-1.0-LICENSE.txt in the LICENSE directory 
 * at the root of this distribution. By using this software in any fashion, you 
 * are agreeing to be bound by the terms of this license.
 * You must not remove this notice, or any other, from this software.
 */
/*
 * cs10 wrapper around gameQuery rev. 0.7.1 startup code
 * hides stuff to make myprogram.js easier to learn
 * this script auto-loads myprogram.js
 */

$(function () {
    var loadScript = function (url, callback) {
        // see also: https://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file

        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;

        // Fire the loading
        head.appendChild(script);
        //console.log("Loaded script: " + url);
    };

    var cs10libname = "cs10-0.7.1-0.4.5.js";
    loadScript("js/libs/" + cs10libname, function () {
        consolePrint("Using: " + cs10libname);

        sprite("playground").playground({height: GQ_PLAYGROUND_HEIGHT,
            width: GQ_PLAYGROUND_WIDTH,
            keyTracker: true,
            mouseTracker: true});

        var studentProgramName = "myprogram.js";
        loadScript("js/" + studentProgramName, function () {
            consolePrint("Running: " + studentProgramName);
            
            setup();

            var REFRESH_RATE = 41;
            $.playground().registerCallback(draw, REFRESH_RATE);
            $.playground().startGame();
        });
    });
});
