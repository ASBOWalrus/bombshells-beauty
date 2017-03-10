var images = ["../images/gallery/gallery-pic-1.jpg",
              "../images/gallery/gallery-pic-2.jpg",
              "../images/gallery/gallery-pic-3.jpg",
              "../images/gallery/gallery-pic-4.jpg",
              "../images/gallery/gallery-pic-5.jpg"];

var slideIndex = 1;

function scrollImg(n) {
  $("#img-1").attr("src", images[slideIndex % images.length - 1 + n]);
  $("#img-2").attr("src", images[slideIndex % images.length + n]);
  $("#img-3").attr("src", images[slideIndex % images.length + 1 + n]);

  if (slideIndex % images.length + 1 + n >= images.length)
  {
    $("#img-3").attr("src", images[0]);
  }

  if (slideIndex % images.length + n >= images.length)
  {
    $("#img-2").attr("src", images[0]);
    $("#img-3").attr("src", images[1]);
  }

  if (slideIndex % images.length - 1 + n < 0)
  {
    $("#img-1").attr("src", images[images.length - 1]);
  }

  if (slideIndex % images.length + n < 0)
  {
    $("#img-2").attr("src", images[images.length - 1]);
    $("#img-1").attr("src", images[images.length - 2]);
  }

  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = images.length - 1;
  }

  if (slideIndex >= images.length) {
    slideIndex = 0;
  }
}

$(document).ready(function() {
  $("#scroll-left").on("click", function() {
    scrollImg(-1);
  });
  $("#scroll-right").on("click", function() {
    scrollImg(+1);
  })
});