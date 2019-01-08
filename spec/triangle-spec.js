import{ Triangle } from './../src/triangle.js'

describe('Triangle', function(){

  it ('should have three sides', function(){
    var triangle =  new Triangle(3, 4, 5);
    expect(triangle.a).toEqual(3);
    expect(triangle.b).toEqual(4);
    expect(triangle.c).toEqual(5);
  });

  it('should determine that a triangle is an equilateral if all sides are equal', function(){
    var triangle = new Triangle(3, 3, 3);
    expect(triangle.equilateral()).toEqual(true);
    expect(triangle.isosceles()).toEqual(false);
    expect(triangle.scalene()).toEqual(false);
  });

  it('should determine that a triangle is an isoceles if two sides are equal', function(){
    var triangle = new Triangle(3, 4, 3);
    expect(triangle.equilateral()).toEqual(false);
    expect(triangle.isosceles()).toEqual(true);
    expect(triangle.scalene()).toEqual(false);
  });

  it('should determine that a triangle is an scalene if no sides are equal', function(){
    var triangle = new Triangle(3, 4, 5);
    expect(triangle.equilateral()).toEqual(false);
    expect(triangle.isosceles()).toEqual(false);
    expect(triangle.scalene()).toEqual(true);
  });

  it('should determine that the sides do not make a triangle if the sum of two sides is less than or equal to the final side', function(){
    var triangle = new Triangle(3, 4, 7);
    expect(triangle.isTriangle()).toEqual(false);
  });
});
