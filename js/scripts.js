$(function() {
  $("#calculate").click(function(){
    var sideA = parseInt($("#side-a").val());
    var sideB = parseInt($("#side-b").val());
    var sideC = parseInt($("#side-c").val());
    var triangleStatus;

    if (isTrianle(sideA,sideB,sideC)) {
      if (scalene(sideA,sideB,sideC)){
        triangleStatus ="Scalene";
      }
      if (isosceles(sideA,sideB,sideC)) {
        triangleStatus = "Isosceles";
      }
      if (equilateral(sideA,sideB,sideC)) {
        triangleStatus = "Equilateral";
      }
    } else {triangleStatus = "Not a triangle"}

    console.log(triangleStatus)

  })


})

var equilateral = function(a,b,c) {
  if (a===b && b===c && a===c) {
    return true
  } return false
}
var isosceles = function(a,b,c) {
  if (a===b || b===c || a===c) {
    return true
  } return false
}
var scalene = function(a,b,c) {
  if (a!==b && b!==c && a!==c) {
    return true
  } return false
}
var isTrianle = function(a,b,c) {
  if ( a+b>c && b+c>a && a+c>b){
    return true
  } return false
}
