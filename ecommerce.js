

// chat box popover content and show upon load
$("#chatPopover").popover({
    title: `How can we help you?<button id="popoverClose" type="button" class="ml-auto close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>`,
    content: `
          <form>
            <label for="question">Ask a question.</label>
            <input type="text" class="form-control" id="question">
            <button style="margin-top: 0.5rem;" type="submit" class="btn">Submit</button>
          </form>
          `,
    html: true,
    placement: "top",
    trigger: "manual"
  }).popover("show");
  // Popover event listener
$("body").on("click", "#popoverClose", function() {
    $("#chatPopover").popover("toggle");
    $(".chat").toggleClass("closed-state");
  });
  
  // toggle button color and popover
  $(".chat").click(function() {
    $("#chatPopover").popover("toggle");
    $(this).toggleClass("closed-state");
  });
  //  modal interactivity
$("#signUpBtn").click(function() {

    // store input values as variables
    var name = $("#firstName").val();
    var email = $("#eMail").val();
  
    // if both name and email are not empty, then change modal content
    if (email !== "" && name !== "") {
      $(".modal-title").html("Thank you for signing up, " + name + "!");
      $(".modal-body").html("Great deals are on the way!");
      $(".modal-footer").hide();
    }
    else {
      // clear the current alert if any
      $("#emailAlert").hide();
      $("#nameAlert").hide();
      // show respective alerts if field empty
      if (email === "") {
        $("#emailAlert").show();
      }
      if (name === "") {
        $("#nameAlert").show();
      }
    }
  });
  
  // Add to cart
  
  // initialize cart value at 0
  var cartNumber = 0;
  
  // listen, tally, display badge
  $("#addToCart").click(function() {
  
    // prevent reload
    event.preventDefault();
  
    // store input as variable
    var additionalValue = $("#quantity").val();
  
    // Tally
    cartNumber = cartNumber + parseInt(additionalValue);
  
    // Change html
    $("#cartItems").html(cartNumber);
  
    // Show the badge
    $("#cartItems").show();
  });

  // Add event listener to trigger all animations
$("#makeRainbow").click(function() {

  // Super Challenge: remove any styling after button click
  $("section").removeAttr("style");

  // Add classes
  $("#red").addClass("red");
  $("#orange").addClass("orange");
  $("#yellow").addClass("yellow");
  $("#green").addClass("green");
  $("#blue").addClass("blue");
  $("#indigo").addClass("indigo");
  $("#violet").addClass("violet");
});

// Remove classes and add styling
$("section").on("animationend", function() {

  // clear classes
  $(this).attr("class", "");

  // Add CSS for width and background color
  $("#red").css("background-color", "red").css("width", "100%");
  $("#orange").css("background-color", "orange").css("width", "100%");
  $("#yellow").css("background-color", "yellow").css("width", "100%");
  $("#green").css("background-color", "green").css("width", "100%");
  $("#blue").css("background-color", "blue").css("width", "100%");
  $("#indigo").css("background-color", "indigo").css("width", "100%");
  $("#violet").css("background-color", "violet").css("width", "100%");
});
var $box = $("#box");

var $ballRollBtn = $("#ball-roll-btn");

var handleBallRollClick = function() {
  $box.addClass("ball-roll");
};

$ballRollBtn.on("click", handleBallRollClick);

