$(document).ready(function() {
        $(".clickable").click(function() {
          $("img").fadeIn();
        });
      });

      $(document).ready(function(){
        $(".clickable").click(function(){
          $("#initially-showing").toggle();
          $("#initially-hidden").toggle();
        });
      });


//adding and removing classes

$(document).ready(function() {
      $("button#green").click(function() {
        $("body").removeClass();
        $("body").addClass("green-background");
      });

      $("button#yellow").click(function() {
        $("body").removeClass();
        $("body").addClass("yellow-background");
      });

      $("button#red").click(function() {
        $("body").removeClass();
        $("body").addClass("red-background");
      });
    });
