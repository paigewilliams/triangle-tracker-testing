export function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype.equilateral = function() {
  if (this.a===this.b && this.b===this.c && this.a===this.c) {
    return true;
  }
  return false;
};

Triangle.prototype.isosceles = function() {
  if (((this.a===this.b) && this.a!==this.c) || ((this.b===this.c) && this.b!==this.a) || ((this.a===this.c) && this.a!==this.b)) {
    return true;
  }
  return false;
};

Triangle.prototype.scalene = function() {
  if (this.a!==this.b && this.b!==this.c && this.a!==this.c) {
    return true;
  }
  return false;
};

Triangle.prototype.isTriangle = function() {
  if ( this.a+this.b>this.c && this.b+this.c>this.a && this.a+this.c>this.b){
    return true;
  }
  return false;
};
