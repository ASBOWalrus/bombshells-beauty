///**
// * Author: Heather Corey
// * jQuery Simple Parallax Plugin
// *
// */

//(function ($) {

//  $.fn.parallax = function (options) {

//    var windowHeight = $(window).height();

//    // Establish default settings
//    var settings = $.extend({
//      speed: 0.15
//    }, options);

//    // Iterate over each object in collection
//    return this.each(function () {

//      // Save a reference to the element
//      var $this = $(this);

//      // Set up Scroll Handler
//      $(document).scroll(function () {

//        var scrollTop = $(window).scrollTop();
//        var offset = $this.offset().top;
//        var height = $this.outerHeight();

//        // Check if above or below viewport
//        if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
//          return;
//        }

//        var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

//        // Apply the Y Background Position to Set the Parallax Effect
//        $this.css('background-position', 'center ' + yBgPosition + 'px');

//      });
//    });
//  }
//}(jQuery));

//$(document).ready(function () {
//  $('.jumbotron').parallax({
//    speed: 0.4
//  });
//});


//var jumboHeight = $('.jumbotron').outerHeight();

//function parallax() {
//  var scrolled = $(window).scrollTop();
//  $('.bg').css('height', Math.round(jumboHeight - scrolled) + 'px');
//}

//$(window).scroll(function (e) {
//  parallax();
//});


$(document).ready(function () {
  $(window).scroll(function () {
    $(".jumbotron").css("-webkit-background-position", "50% " + (($(this).scrollTop() / 2) * 0.4) + "px");
    $(".jumbotron").css("-moz-background-position", "50% " + (($(this).scrollTop() / 2) * 0.4) + "px");
    $(".jumbotron").css("-o-background-position", "50% " + (($(this).scrollTop() / 2) * 0.4) + "px");
    $(".jumbotron").css("background-position", "50% " + (($(this).scrollTop() / 2) * 0.4) + "px");
  });
});