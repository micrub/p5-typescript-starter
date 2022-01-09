export namespace Sketch {
  // GLOBAL VARS & TYPES
  let numberOfShapesControl: p5.Element;

  // P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
  export function setup() {
    console.debug("🚀 - Setup initialized - P5 is running");

    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER).noFill().frameRate(30);

  }

  // p5 WILL AUTO RUN THIS FUNCTION IF THE BROWSER WINDOW SIZE CHANGES
  export function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  // p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
  export function draw() {

    // CLEAR BACKGROUND
    background(0);

  }
}