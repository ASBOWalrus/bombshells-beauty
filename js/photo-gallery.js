var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var images = $(".gallery-images");

  if(n > images.length)
  {
    slideIndex = 1;
  }

  if(n < 1)
  {
    slideIndex = images.length;
  }

  for(i = 0; i < images.length; i++)
  {
    images[i].style.display = "none";
  }

  images[slideIndex - 1].style.display = "inline";
  images[slideIndex].style.display = "inline";
  images[slideIndex + 1].style.display = "inline";
}

$(document).ready(function() {
  $("#scroll-left").on("click", function() {
    plusDivs(-1);
  });
  $("#scroll-right").on("click", function() {
    plusDivs(+1);
  })
});