// class methods or Static methods

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(p1, p2) {
    let X = p1.x - p2.x;
    let Y = p1.y - p2.y;
    let result = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));
    return result;
  }
}

let p1 = new Point(1, 1);
let p2 = new Point(2, 2);
console.log(Point.distance(p1, p2));
