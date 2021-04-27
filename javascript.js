$(document).ready(function() {
  var styles = ["a", "b", "c", "d"];
  var index = 1;
  $("body")
    .find("button")
    .each(function() {
      $(this).addClass(styles[index++]);
      if (index >= styles.length) index = 0;

    });

$(document).ready(function() {
  $(".work:not(.casestudies)").addClass("current");
  var styles = ["a","b","c","d"];
  var index = 1;
  $(".work")
  .find(".overlay")
  .each(function() {
    var gradient = $("." + styles[index++]).css("background-image"); 
    $(this).css("background-image", gradient);   

    // console.log(gradient + ", 0.4)" + url + " no-repeat center center");
    // $(this).css("background", gradient + ", 0.4)" + url + " no-repeat center center");
    
    if (index >= styles.length) index = 0;

  
});
})

  $(".tablink").click(function() {
    var tab_id = $(this).attr("data-tab");

    $(".tablink").removeClass("current");

    $(".about").removeClass("current");

    $(this).addClass("current");

    $("#" + tab_id).addClass("current");
  });

  $(".worktab").click(function() {

    if ($(this).hasClass("current")) {
      $(".worktab").removeClass("current");
      $(".work:not(.miscellaneous)").addClass("current");
    }

    else {
    var proj_id = $(this).attr("data-tab");

    $(".worktab").removeClass("current");
    $(".work").removeClass("current");


    $(this).addClass("current");

    $("." + proj_id).addClass("current");
    }
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
