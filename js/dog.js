// Constructor function for a Dog

function Dog(game) {
  this.game = game;
  this.el = $("#dog-template").clone();
  this.el.removeAttr("id");

  // Display the Dog in the #game
  this.draw();
}


// Some animation using a Timeout to make the Dog flap.
Dog.prototype.walk = function() {

    // Oh Javascript...
  var _this = this;

  var states = ["stepTwo","stepThree","stepFour"];

  // Start at 1
  var i = 0;

  function animateDog() {
    // Remove all the classes
    // _(states).each(function(state) {
    for(var j = 0; j < states.length; j++) {
      $(_this.el).removeClass(states[j]);
    }

    // Put the class i on
    $(_this.el).addClass(states[i]);

    // increment i
    i += 1; 

    if(i > states.length - 1) i = 0; 

    // call ourself!
    // Do this again in 500 mililsceonds
    setTimeout(animateDog, 300);
  }

  // Do this again in 500 mililsceonds
  setTimeout(animateDog, 300);





  // for(var i=0; i<states.length; i++){

  //      dogTimeOut(states[i]);    
        
  // }




  // $(this.el).toggleClass("stepOne");
  // $(this.el).toggleClass("stepTwo");
  // $(this.el).toggleClass("stepThree");
  // $(this.el).toggleClass("stepFour");
  // $(this.el).toggleClass("stepFive");
  // $(this.el).toggleClass("stepSix");
  // $(this.el).toggleClass("stepSeven");

  // Do this again in 300 milliseconds
  // this.walkTimer = setTimeout((function() {
  //   _this.walk();
  // }), 300);
}

// TODO: Display the Dog on the screen.
Dog.prototype.draw = function() {
  // Make the Dog appear somewhere random along the page and just off the screen

  // Append the element to the DOM, use the #game element

  console.log();
  $("#game").append(this.el);
  // $(this.el).css('bottom','0');

  // ... and Fly!
  $(this.el).animate({
      left: '100%', 
  }, 8000,"linear");
  
  // Start Flapping...
  this.walk();

}



// Code to remove the Dog from the DOM and from memory.
Dog.prototype.remove = function() {
  $(this.el).remove();
  delete this;
}