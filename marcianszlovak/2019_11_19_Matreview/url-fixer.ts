"use strict";
/* Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

console.log(url); */

let url: string = "https//www.reddit.com/r/nevertellmethebots";
let url1 = url.replace("bots", "odds");
let newurl = url1.slice(0, 5) + ":" + url1.slice(5);

if (url.search(":") === 1) {
  console.log("gumikacsa");
} else {
  console.log(newurl);
}
