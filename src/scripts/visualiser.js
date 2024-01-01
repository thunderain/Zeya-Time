
//===========================================================
// INTRO DIV BACKGROUND ANIMATIONS
//===========================================================

// Get the element with the class "div-home-title"
const divVis = document.querySelector('.div-vis');

var deg = 0;
// Function to update the background gradient
function updateBackground() {
  // Generate a random degree value between 0 and 360
  /*   var deg = Math.floor(Math.random() * 361);
   */

  deg++;
  if (deg == 360) {
    deg = 0;
  }

  // Update the background gradient with the new degree value
  divVis.style.backgroundImage = `linear-gradient(${deg}deg, pink 5%, blue)`;
 // document.body.style.backgroundImage = `linear-gradient(${deg}deg, pink 15%, orange)`;
}



// Call the updateBackground function every 1/10 seconds
setInterval(updateBackground, 35);


//===========================================================
// PORTFOLIO  BACKGROUND ANIMATIONS
//===========================================================