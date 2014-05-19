$(document).ready(function() {
  console.log("Welcome to Duck Hunt!");

  // Behaviour for the play again link
  $('#play-again').click(function(e) {
    $("#game-over").toggle();
    new Game();
  });


  // Moves the crosshair with the mousepointer
  // TODO: Add a mousemove event to the #game element...

  $(document).on('mousemove', function(e){
    $('#crosshair').css({
       left:  e.pageX,
       top:   e.pageY,
       display: "block"
    });
  });



  // Kick-off a New Game
  // TODO: Pass in a string to represent the difficulty level
  new Game();
});