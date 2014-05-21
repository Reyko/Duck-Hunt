$(document).ready(function() {
  console.log("Welcome to Duck Hunt!");

  // Behaviour for the play again link
  $('#play-again').click(function(e) {
    $("#game-over").toggle();
      window.location.reload();
  });


  // Moves the crosshair with the mousepointer
  // TODO: Add a mousemove event to the #game element...
  // Kick-off a New Game
  // TODO: Pass in a string to represent the difficulty level

  $("#start").click(function() {
       // alert( "Handler for .click() called." );
       // alert($('input[name=difficulty]:checked').val());

   difficulty = $('input[name=difficulty]:checked').val();
   $("#modal").toggle();
   $("#game").css({
    cursor:"none"
   });
   $("#shells").toggle();


   game = new Game(difficulty);
   game.dog();


   $(document).on('mousemove', function(e){
      $('#crosshair').css({
         left:  e.pageX - 30,
         top:   e.pageY - 30,
         display: "block",
       });
    });



  soundEffect = document.getElementById("shotgun");
  $("#game").mousedown(function() {  
    soundEffect.currentTime = 0;
    soundEffect.play();    
        // 3 shots
    if ($('#shells').find('img')){
        $('#shells').find('img').first().remove();
        game.counter +=1;
    }
    if(game.counter == 3){
       
         $("#game-over").toggle();
    }
  });


  });

  



});