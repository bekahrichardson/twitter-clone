$(document).ready(function() {

  $("#hide").click(function(){
      $(".button").hide();
  });
      $("#show").click(function(){
            $(".button").show();
      });

  $("#hide").click(function(){
      $("#char-count").hide();
  });
      $("#show").click(function(){
            $("#char-count").show();
      });




});


// Initially, the Tweet button and the character count button should be hidden (CSS).

//	When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.


// As the user types, the character count should decrease.


// When there are 10 or less characters, the character counter should turn red.
