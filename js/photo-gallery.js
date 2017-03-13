var images = ["../images/gallery/gallery-pic-1.jpg",
              "../images/gallery/gallery-pic-2.jpg",
              "../images/gallery/gallery-pic-3.jpg",
              "../images/gallery/gallery-pic-4.jpg",
              "../images/gallery/gallery-pic-5.jpg"];

var slideIndex = 0;

var selectArr = [];
var imgArr = [];

function scrollImg(n) {
	showImg(slideIndex += n);
}

function currentImg(n) {
  showImg(slideIndex = n);
}

function showImg(n) {
  if(n >= images.length)
  {
    slideIndex = 0;
  }
  if(n < 0)
  {
    slideIndex = images.length - 1;
  }
  if(slideIndex >= images.length)
  {
    slideIndex = 0;
  }
  if(slideIndex < 0)
  {
    slideIndex = images.length - 1;
  }

  for(var i = 0; i < imgArr.length; i++)
  {
    $(imgArr[i]).css("display", "none");
  }
  for(var j = 0; j < selectArr.length; j++)
  {
    $(selectArr[j]).removeClass("active-select");
  }

  $(imgArr[slideIndex]).fadeIn(200);
  $(selectArr[slideIndex]).addClass("active-select");
}

$(document).ready(function() {
  for(var k = 0; k < images.length; k++)
  {
    $(".selector").append('<span class="selector-icon icon-' + k + '"></span>');
    $(".gallery-images").append('<img class="img-responsive gallery-img img-' + k + '" src="' + images[k] + '">');
  }

  selectArr = $(".selector-icon");
  imgArr = $(".gallery-img");

  $(selectArr[slideIndex]).addClass("active-select");

  showImg(slideIndex);

	$("#scroll-left").on("click", function() {
    $(imgArr[slideIndex]).fadeOut(200, function() {
      scrollImg(-1);
    });
	});
	$("#scroll-right").on("click", function() {
    $(imgArr[slideIndex]).fadeOut(200, function() {
      scrollImg(+1);
    });
  });

  $(".selector-icon").on("click", function() {
    var n = $(this).attr("class").match(/\d+/) - 1;
    $(imgArr[slideIndex]).fadeOut(200, function() {
      currentImg(n + 1);
    });
  });
});