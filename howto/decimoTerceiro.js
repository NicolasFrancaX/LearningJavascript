function Rect(width, height) {
  this.width = width;
  this.height = height;
}

Rect.prototype.area = function() {
  return this.width * this.height;
}

Rect.prototype.perimeter = function() {
  return 2 * (this.width + this.height);
}

Rect.prototype.diagonal = function() {
  return Math.sqrt(Math.pow(this.width, 2) +
                   Math.pow(this.height, 2));
}

var x = new Rect(4, 4);
var y = new Rect(8, 2);
