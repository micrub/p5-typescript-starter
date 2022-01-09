export var Sketch;
(function (Sketch) {
    var numberOfShapesControl;
    function setup() {
        console.debug("🚀 - Setup initialized - P5 is running");
        createCanvas(windowWidth, windowHeight);
        rectMode(CENTER).noFill().frameRate(30);
    }
    Sketch.setup = setup;
    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
    }
    Sketch.windowResized = windowResized;
    function draw() {
        background(0);
    }
    Sketch.draw = draw;
})(Sketch || (Sketch = {}));
//# sourceMappingURL=index.js.map