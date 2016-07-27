"use strict";
/* 
 * Copyright (c) 2012, 2016 Carson Cheng.
 * Licensed under the MIT-License (http://opensource.org/licenses/MIT)
 * which can be found in the file MIT-LICENSE.txt in the LICENSE directory
 * at the root of this project distribution.
 */
// There are a bunch of special variables and functions.
// Here are some notable ones, but there are many more:
// setup, draw, PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT

var setup = function () {
    var starsPicWidth = 300;
    var starsPicHeight = 298;
    var starAnim = newGQAnimation("img/stars.jpg");

    var backgroundGroupName = "backgroundGroup";
    createGroupInPlayground(backgroundGroupName);

    createSpriteInGroup(backgroundGroupName, "star1", starAnim, starsPicWidth, starsPicHeight);
    createSpriteInGroup(backgroundGroupName, "star2", starAnim, starsPicWidth, starsPicHeight);
    createSpriteInGroup(backgroundGroupName, "star3", starAnim, starsPicWidth, starsPicHeight);

}; // end of setup() function. Notice the braces match!
// there should only ever be ONE setup() function!!!


var smallStarSpeed = 1;
var mediumStarSpeed = 3;
var largeStarSpeed = 5;

var draw = function () {
    var newPos; // declaring newPos variable without initializing it

    newPos = spriteGetX("star1") - smallStarSpeed;
    if (newPos < -1 * spriteGetWidth("star1")) {
        newPos = PLAYGROUND_WIDTH;
    }
    spriteSetX("star1", newPos);

    newPos = spriteGetX("star2") - mediumStarSpeed;
    if (newPos < -1 * spriteGetWidth("star2")) {
        newPos = PLAYGROUND_WIDTH;
    }
    spriteSetX("star2", newPos);

    newPos = spriteGetX("star3") - largeStarSpeed;  // there's a spriteGetY too, by the way
    if (newPos < -1 * spriteGetWidth("star3")) { // there's a spriteGetHeight too, also a spriteSetWidth and spriteSetHeight
        newPos = PLAYGROUND_WIDTH;
    }
    spriteSetX("star3", newPos); // there's a spriteSetY too
}; // end of draw() function. Notice the braces match!
// there should only ever be ONE draw() function!!!
