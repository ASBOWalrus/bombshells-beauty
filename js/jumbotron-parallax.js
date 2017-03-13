$(document).ready(function () {
	var speed = 0.5;

  	$(window).scroll(function () {
    	$(".jumbotron").css("-webkit-background-position", "50% " + (($(this).scrollTop() / 2) * speed) + "px");
    	$(".jumbotron").css("-moz-background-position", "50% " + (($(this).scrollTop() / 2) * speed) + "px");
    	$(".jumbotron").css("-o-background-position", "50% " + (($(this).scrollTop() / 2) * speed) + "px");
    	$(".jumbotron").css("background-position", "50% " + (($(this).scrollTop() / 2) * speed) + "px");
  	});
});