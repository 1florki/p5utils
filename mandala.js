// mandala settings: 

// rotations (number of rotations) 
// [default: 4]

// mirror 
// [default: false]

// translate (translate to center of canvas) 
// [default: true]


class Mandala {
  constructor(opts) {
    opts = opts || {};
    this.rotations = opts.rotations || 4;
    this.mirror = opts.mirror || false;
    this.translate = (opts.translate != undefined) ? opts.translate : true;
  }
  
  draw(myFunc, x, y, a, b, c, d) {
    if(this.translate) translate(width / 2, height / 2);
    for(let i = 0; i < this.rotations; i++) {
      myFunc(x, y, a, b, c, d);
      if(this.mirror) {
        scale(1, -1);
        myFunc(x, y, a, b, c, d);
        scale(1, -1);
      }
      rotate(TWO_PI / this.rotations);
    }
  }
  
  line(x1, y1, x2, y2) {
    this.draw(line, x1, y1, x2, y2);
  }
  arc(x, y, w, h, start, stop) {
    this.draw(arc, x, y, w, h, start, stop);
  }
  ellipse(x, y, w, h) {
    this.draw(ellipse, x, y, w, h);
  }
  circle(x, y, d) {
    this.draw(circle, x, y, d);
  }
  point(x, y) {
    this.draw(point, x, y);
  }
  quad(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.draw(quad, x1, y1, x2, y2, x3, y3, x4, y4);
  }
  rect(x, y, w, h) {
    this.draw(rect, x, y, w, h);
  }
  square(x, y, s) {
    this.draw(square, x, y, s);
  }
  triangle(x1, y1, x2, y2, x3, y3) {
    this.draw(triangle, x1, y1, x2, y2, x3, y3);
  }
  
}
