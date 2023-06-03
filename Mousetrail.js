//Dots is an array of Dot objects,
//Mouse is an object used to track the X and Y position of the mouse, set with a mousemove event listener below
//Mouse x and y is where the dots array will start in pixels
var dots = [],
  mouse = { x: 350, y: 300 };

//The Dot object used to scaffold the dots
var Dot = function () {
  this.x = 350;
  this.y = 400;
  this.node = (function () {
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 20; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
  // draw() is called.
  var x = mouse.x,
    y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function (dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .9;
    y += (nextDot.y - dot.y) * .9;

  });
}

addEventListener("mousemove", function (event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();








// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots2 = [],
  mouse = {
    x: 350,
    y: 300
  };

// The Dot object used to scaffold the dots
var Dot2 = function () {
  this.x = 350;
  this.y = 400;
  this.node = (function () {
    var n2 = document.createElement("div");
    n2.className = "trail3";
    document.body.appendChild(n2);
    return n2;
  }());
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot2.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 20; i++) {
  var d2 = new Dot2();
  dots2.push(d2);
}

// This is the screen redraw function
function draw2() {
  // Make sure the mouse position is set everytime
  // draw() is called.
  var x = mouse.x,
    y = mouse.y;

  // This loop is where all the 90s magic happens
  dots2.forEach(function (dot2, index2, dots2) {
    var nextDot2 = dots2[index2 + 1] || dots2[0];

    dot2.x = x;
    dot2.y = y;
    dot2.draw();
    x += (nextDot2.x - dot2.x) * .8;
    y += (nextDot2.y - dot2.y) * .8;

  });
}

addEventListener("mousemove", function (event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate2() {
  draw2();
  requestAnimationFrame(animate2);
}

// And get it started by calling animate().
animate2();














// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots3 = [],
  mouse = {
    x: 350,
    y: 300
  };

// The Dot object used to scaffold the dots
var Dot3 = function () {
  this.x = 350;
  this.y = 400;
  this.node = (function () {
    var n3 = document.createElement("div");
    n3.className = "trail2";
    document.body.appendChild(n3);
    return n3;
  }());
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot3.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 20; i++) {
  var d3 = new Dot3();
  dots3.push(d3);
}

// This is the screen redraw function
function draw3() {
  // Make sure the mouse position is set everytime
  // draw() is called.
  var x = mouse.x,
    y = mouse.y;

  // This loop is where all the 90s magic happens
  dots3.forEach(function (dot3, index3, dots3) {
    var nextDot3 = dots3[index3 + 1] || dots3[0];

    dot3.x = x;
    dot3.y = y;
    dot3.draw();
    x += (nextDot3.x - dot3.x) * .7;
    y += (nextDot3.y - dot3.y) * .7;

  });
}

addEventListener("mousemove", function (event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate3() {
  draw3();
  requestAnimationFrame(animate3);
}

// And get it started by calling animate().
animate3();
