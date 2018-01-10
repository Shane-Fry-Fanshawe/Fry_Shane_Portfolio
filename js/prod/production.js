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

var Shane2 = "shane is awesome";

var Shane3 = "shane is awesome";

(function () {


  //Trevor left till when ever we present to get this done, and I spent so much time due to our 2 people Officialize group that I am going to be submitting this later (I assume its his class marking this if not
  //This is how it works, Im just low on time. We use the database to call JSON which is javascript in object form like the car one we did in class, were we can target a certain value like car.year and using that we use
  // an http request to pull the info from the browser and database then parse it but querying a certain thing you want to populate on the screen.

  //Sorry I have been doing this non stop and when Trevor basically offers 4 extra days im going to take it (I hope that Justin if youre reading this it isnt part of your class, and if you are I will have it fone before I present if you allow im not sure whos class even marks this and if anyones actually reading this :) 






  // the XMLHttpRequest object is a built-in part of every browser's JavaScript API. It has methods (functions) and propeties that you can run to do an AJAX request. Declaring it with round brackets at the end instantiates (creates) a new instance of the object.
  const httpRequest = new XMLHttpRequest();

  // the getCarData function fires every time you click on a car thumbnail; it passes itself into the function (the 'this' keyword referes to the object that called the function => the element clicked on) so that we can use that element's ID attribute as a reference to pass to the query we want to run. We're retrieving a single row from the database where the ID that we pass matches the field we've referenced in the query (in the functions.php file)
  function getCarData() {
    // make an AJAX call to the database; handle errors first
    if (!httpRequest) { // this is for older browser that don't support AJAX
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false; // exit the whole process and don't do anything else - we're done
    }

    // there are 4 stages to an AJAX request: the init, sending the url, getting the response, and done. every time that state changes (the readystate) we fire the processRequest function to catch errors or do something with the data that gets returned from the database when the request is finished
    httpRequest.onreadystatechange = processRequest;
    httpRequest.open('GET', './includes/functions.php?carModel=' + this.id); // pass in the id from the element we're clicking on
    httpRequest.send(); // run the PHP file (or whatever is in the .open method above)
  }

  // httpRequest.onreadystatechange (on line 19) will call this 4 times. We process / monitor the status of the AJAX call. When it's done (lines 29 and 30) that means our call was successful and we have some data returned from the database to process
  function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome
        //debugger;
        // JSON.parse turns the stingified database response (the database row) into a plain object that JavaScript can use
        let data = JSON.parse(httpRequest.responseText);

        // send our object through to the function that will do the page update - plug in the text, change the css opacity, etc
        processResult(data);
      } else {
        // if anything went wrong with the AJAX call, this will be called instead and we'll be done => need to fix any errors
        alert('There was a problem with the request.');
      }
    }
  }

  // processResult is run when the AJAX call is complete and we have the data back. It gets called on line 36, and the data variable gets passed in from that function (it's the JavaScript object we got from the database)
  function processResult(data) {

  }

  // loop through and add event handling to each car thumbnail on the page. on a click, they'll fire the AJAX call at the top of the script file.

  });

})();
