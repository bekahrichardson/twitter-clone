$(document).ready(function() {
//hide tweet controls until user's in text area.

  $("tweet-controls").hide();

  $(".tweet-actions").hide();
//	When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.

$("textarea").on("click", function() {
  var currentHeight = $(this).height();
  var dblHeight = currentHeight * 2;
  $(this).height(dblHeight);
});






$('.tweet-compose').val("");
$('.tweet-compose').css("height", "2.5em");

$('#char-count').text(140);


});


// Initially, the Tweet button and the character count button should be hidden (CSS).


// As the user types, the character count should decrease.


// When there are 10 or less characters, the character counter should turn red.
