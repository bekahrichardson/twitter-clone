$(document).ready(function() {
// Initially, the Tweet button and the character count button should be hidden (CSS). (put display: none in the CSS to do this)

  $("#tweet-controls").hide();

  $(".tweet-actions").hide();
//	When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.

$("textarea").on("click", function() {
  var currentHeight = $(this).height();
  var dblHeight = currentHeight * 2;
  $(this).height(dblHeight);
});

$("textarea").on("click", function() {
  $(this).show("#tweet-controls");
  $(this).show(".tweet-actions");
});

// As the user types, the character count should decrease.
$('textarea').keyup(function() {
  var maxLength = 100;
  var length = $(this).val().length;
  var length = maxLength - length;
  $('#char-count').text(length);
})




// When there are 10 or less characters, the character counter should turn red.



});






// When there are 10 or less characters, the character counter should turn red.
