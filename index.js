// Wait until the HTML document is fully loaded
$(document).ready(function () {

  // When "Show Box" button is clicked
  $("#showBtn").click(function () {
    // Show the box with animation
    $("#box").fadeIn();
  });

  // When "Hide Box" button is clicked
  $("#hideBtn").click(function () {
    // Hide the box with animation
    $("#box").fadeOut();
  });

});
