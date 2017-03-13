$(document).ready(function () {
  var toggle = false;

  $(".dropdown-btn").on("click", function (e) {
    if(e.which === 1)
    {
      $(this).children(".arrow").toggleClass("rotate");

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
    }
  });

  document.addEventListener("click", function (e) {
    if(e.which === 1)
    {
      if(!$(e.target).is(".btn-group"))
      {
        if(toggle === true)
        {
          $("#toggle-on").attr("id", "");
          $(".arrow").removeClass("rotate");
          toggle = false;
        }
      }
    }
  });
});