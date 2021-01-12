# p5utils

utility classes for p5

## mandala

https://1florki.github.io/p5utils/mandala.js

```javascript
let m;

function setup() {
  createCanvas(400, 400);
  
  m = new Mandala({rotations: 12, mirror: true});
  background(220);
}

function draw() {
  background(220);
  m.line(0, -cos(frameCount * 0.1) * 50, 
         sin(frameCount * 0.01) * 100, sin(frameCount * 0.05) * 20);
}
```
