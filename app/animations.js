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
// Check below here:
// and the character count and Tweet buttons should be revealed.
$("textarea").on("click", function() {
  console.log("I'm working");
  $("#tweet-controls").show();
});


// As the user types, the character count should decrease.
$('textarea').keyup(function() {
  var maxLength = 140;
  var length = $(this).val().length;
  var remainingLength = maxLength - length;
  $('#char-count').text(remainingLength);
  if (remainingLength <= 120) {
      $("#char-count").css("color", "red");
  }
});

// When there are 10 or less characters, the character counter should turn red.


// If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars).





// When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname.




// The tweet actions (Reply, Retweet, etc) should only show up when you hover over that individual tweet. Otherwise, they should be hidden.





// The Retweets/timestamp/Reply areas should also be hidden by default. These should only expand if you click on the tweet. Have the students use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com




});
