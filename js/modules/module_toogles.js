//Show and Hide for the Navigation Menu on Mobile Size.

var navButton = document.querySelector(".title-bar");


function showhide(){

  var navMobile = document.querySelector("#main-menu");

  if (navMobile.style.display == "block"){
      navMobile.style.display = "none"
 }
 else {
      navMobile.style.display = "block";
    }

  }

navButton.addEventListener('click', showhide, false);


//Hide Project Info for the UX page (Website stuff), this is the X that is being closed.
//I will be trying to make this more effeinct in one function targeting the section its in, and if any X is clicked only hides that Section not the others too all in one (that would be sorta broken)
//If I havent done that yet I will be! Just running low on time wanting to get the bare minimal done before submission I will come back to this, as it is my own profoilo to use forever now. Want it to be prefect/impressiveu :)


var xButton = document.querySelector(".odell_x");
var xButtonLotr = document.querySelector(".lotr_x");
var xButtonSweets = document.querySelector(".sweets_x");


var odell_info_box = document.querySelector("#odell_info");
var lotr_info_box = document.querySelector("#lotr_info");
var sweets_info_box = document.querySelector("#sweets_info");

var odell_button = document.querySelector("#odell_title");
var lotr_button = document.querySelector("#lotr_title");
var sweets_button = document.querySelector("#sweets_title");


function hideXodell(){
  odell_info_box.style.display = "none";
  }

  function hideXlotr(){
    lotr_info_box.style.display = "none";
    }

    function hideXsweets(){
      sweets_info_box.style.display = "none";
      }

//The title allows for a open and close, not just open.

function showOdell(){

  if (odell_info_box.style.display == "block"){
      odell_info_box.style.display = "none"
 }
 else {
      odell_info_box.style.display = "block";
    }
  }

  function showLOTR(){

    if (lotr_info_box.style.display == "block"){
        lotr_info_box.style.display = "none"
   }
   else {
        lotr_info_box.style.display = "block";
      }
    }

    function showSweets(){

      if (sweets_info_box.style.display == "block"){
          sweets_info_box.style.display = "none"
     }
     else {
          sweets_info_box.style.display = "block";
        }
      }

lotr_button.addEventListener('click', showLOTR, false);
odell_button.addEventListener('click', showOdell, false);
sweets_button.addEventListener('click', showSweets, false);
xButton.addEventListener('click', hideXodell, false);
xButtonLotr.addEventListener('click', hideXlotr, false);
xButtonSweets.addEventListener('click', hideXsweets, false);
