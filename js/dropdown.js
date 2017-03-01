$(document).ready(function () {
  var toggle = false;
  $(".dropdown-btn").on("click", function () {
    if (toggle === false)
    {
      $(this).attr("id", "toggle-on");
      toggle = true;
    }
    else
    {
      $(this).attr("id", "");
      toggle = false;
    }
  });

  //$(document).on("click", function (e) {
  //  if(!$(e.target).is(".btn-group"))
  //  {
  //    if(toggle === true)
  //    {
  //      $("#toggle-on").attr("id", "");
  //      toggle = false;
  //    }
  //  }
  //});

  document.addEventListener("click", function (e) {
    if(!$(e.target).is(".btn-group"))
    {
      if(toggle === true)
      {
        $("#toggle-on").attr("id", "");
        toggle = false;
      }
    }
  });
});