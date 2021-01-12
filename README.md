# p5utils

utility classes for p5

## mandala

https://1florki.github.io/p5utils/mandala.js

example (https://editor.p5js.org/applerisotto/sketches/GWSWHjUWg):

```javascript
let m;
function setup() {
  createCanvas(400, 400);
  m = new Mandala({rotations: 12, mirror: true});
  background(255);
}

function draw() {
  background(255, 5);
  m.line(0, -cos(frameCount * 0.004) * 180, 
         sin(frameCount * 0.02) * 100, sin(frameCount * 0.03) * 20);
}
```
