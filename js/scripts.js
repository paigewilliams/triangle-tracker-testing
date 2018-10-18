$(function() {
  $("#calculate").click(function(){
    var sideA = parseInt($("#side-a").val());
    var sideB = parseInt($("#side-b").val());
    var sideC = parseInt($("#side-c").val());
    var triangleStatus;
    var triangleImage;

    $("input").change(function(){
      if ($(this).val()) {
        console.log($(this).val())
        $(this).removeClass("is-invalid")
      }
      $(this).removeClass("is-invalid");
    })



    if (sideA && sideB && sideC) {
      if (isTrianle(sideA,sideB,sideC)) {
        if (scalene(sideA,sideB,sideC)){
          triangleStatus ="Scalene";
          triangleImage = "imgs/scalene.png"
        }
        if (isosceles(sideA,sideB,sideC)) {
          triangleStatus = "Isosceles";
          triangleImage = "imgs/isoceles.png"

        }
        if (equilateral(sideA,sideB,sideC)) {
          triangleStatus = "Equilateral";
          triangleImage = "imgs/equilateral.png"

        }
      } else {
        triangleStatus = "Not a triangle"
        triangleImage = "imgs/notatriangle.png"

      }
      $("#triangle-image").attr("src",triangleImage);

    } else {
      $("input").each(function() {
        $(this).addClass("is-invalid");
      })
      // alert("Side missing")

    }


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
