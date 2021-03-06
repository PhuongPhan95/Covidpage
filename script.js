(function () {
    "use strict";

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      //set value to get the view of client
      var rect = el.getBoundingClientRect();
      //return value for the function
      return (
        //set condition
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // callbackFunc is a function call the timeline box out when elements are in the view area.
    function callbackFunc() {
      // define variables
      var items = document.querySelectorAll(".timeline li");
      //for loop run through the list of timeline boxes
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  }
)();
