import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Triangle } from './../src/triangle.js';

$(function() {
  $("#calculate").click(function(){
    var sideA = parseInt($("#side-a").val());
    var sideB = parseInt($("#side-b").val());
    var sideC = parseInt($("#side-c").val());

    $("input").change(function(){
      if ($(this).val()) {
        $(this).removeClass("is-invalid");
      }
      $(this).removeClass("is-invalid");
    });
    if (sideA && sideB && sideC) {
      var triangle = new Triangle(sideA, sideB, sideC);
      if (triangle.isTriangle()) {
        if (triangle.scalene()){
          $(".output").html("scalene");
        }
        if (triangle.isosceles()) {
          $(".output").html("isosceles");
        }
        if (triangle.equilateral()) {
          $(".output").html("equilateral");
        }
      } else {
        $(".output").html("not a triangle");
      }
    }
    else
    {
      $("input").each(function() {
        $(this).addClass("is-invalid");
      });
      // alert("Side missing")
    }
  });
});
