$(document).ready(function() {
  var styles = ["a", "b", "c", "d"];
  var index = 0;
  $("body")
    .find("button")
    .each(function() {
      $(this).addClass(styles[index++]);
      if (index >= styles.length) index = 0;
    });

  $(".tablink").click(function() {
    var tab_id = $(this).attr("data-tab");

    $(".tablink").removeClass("current");

    $(".about").removeClass("current");

    $(this).addClass("current");

    $("#" + tab_id).addClass("current");
  });
});

$(document).ready(function() {
  $("a[href*=\\#]").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      300
    );
  });
});
