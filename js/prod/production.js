var httpRequest = new XMLHttpRequest();
function loadData() {

httpRequest.onreadystatechange = processRequest;
httpRequest.open("GET", "loadData.php", true);
httpRequest.send(null);

}
function processRequest() {
// let reqIndicator = document.querySelector('.request-state');
//reqIndicator.textContent = httpRequest.readyState;

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



//This is a combination of many, many, many tutorials. Maybe sometime next semester during a class break we can talk about this because I feel like there is a simplier way
//I ran into some errors doing other content on the page so I left this because it was working, I think I got little santax errors or something silly but otherwise: 
//Just to clarify I understand that the database is being called
//Then the info is being put into JSON format like the season example
//Then you can use that information after you parse it to call upon it as if it was a hard coded file in object form

//I just get caught up in syntax errors and I am trying my best to do online courses and tutorials as much as possible but it can be tricky so this is the best I could come up with

//I plan on cleaning this up afterwards but I want to show you I knew what to do for grading purposes.
function processResult(data) {
// loop the dATA AND PUT IT IN LOGOS
var listlogo = document.getElementById('logotest');
var listlogo1 = document.getElementById('logo1');
//var list1 = document.createElement("div");
var elem ='' ;
var logo1 ='';
for (i = 0; i < data.length; i++)
{
if(i==0)
{
  logo1 +=  '<div class="small-12 small-centered medium-6 columns">';
  logo1 += ' <h3 class="hidden">'+data[i].logo_id+'</h3>';
  logo1 += '<img class="ui_logo" src="images/' + data[i].logo_name + '" alt="kicks 2 find logo" width="200" height="200">';
  logo1 += '</div>';
}
else{
elem +='<div class="small-12 medium-3 columns clone">';
elem +='<h3 class="hidden">Sub Logo ' + data[i].logo_id + '</h3>';
elem +='<img class="ui_logo" src="images/' + data[i].logo_name + '" alt="OBJ logo">';
elem +='</div>';
}

}
listlogo1.innerHTML = logo1;
listlogo.innerHTML = elem;
}

var galleryData = {
  // add info for the cars here

  k2f_logo: {
    title : "K2F Logo",

    images : [
    				"k2f.png"
    			],

  		},


      obj_logo: {
        title : "OBJ Logo",

        images : [
        				"obj_logo.png"
        			],

      		},

          lori_logo: {
            title : "Lori Logo",

            images : [
                    "lori_designs_logo.png"
                  ],

              },

              crunicans_logo: {
                title : "crunicans_logo",

                images : [
                        "crunicans_logo.png"
                      ],

                  },

                  sweets_logo: {
                    title : "Shanes Sweets Logo",

                    images : [
                            "sweets_logo.png"
                          ],

                      },


  	};

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

//SO this was my gallery where if you clicked the image it would bring up that image full size, and a title maybe description, it was working until I added ajax because of the IDs and things being weird when I looped through it
//Like I said in my AJAX file there has to be an easier way then what I did and I would like help next semester possibly
//I planned on using the AJAX since it turns my database into JSON format like my "module gallery_info" but thats where I ran into problems
//I left the code for grading purposes, and I will explain below


//I used methods shown in class and was going to expand on them! Using the IDs and element to target the clicked image will correspond by putting the info into the lightbox
// I was going to add a you might like and have the video show if an image was clicked, and a logo if a video was clicked
// To do that I would have seperate functions that full in info depending on which was clicked, and then have arrows that would basically add 1 or -1 to the current index and that would start swapping images like a next button
//I just couldnt code this because I cant get my database working or I dont understand it like I do with JSON objects.
// Sorry about all the excuses but I am trying to explain my best incase marks are acheivable, and I was tight on time since the group projects situations leaving me only about 1 week to code the entire thing while working :(

(function () {

	    var theImages = document.querySelectorAll('.ui_logo'),
	        logoTitle = document.querySelector('.lightboxTitle'),


					let lightbox = document.querySelector('#lightbox');


	        //add an index number to the thumbnail for array refrence


	        theImages.forEach(function(element, index) {


	        //loop through and do stuff to each element
	        element.addEventListener('click', changeLightboxElements, false);

				console.log(index);


				 function changeLightboxElements(currentIndex, currentObject) {

	          let objectIndex = galleryData[this.id];
						let lightboxImg = lightbox.querySelector('img');

            logoTitle.classList.add(this.id);
	          logoTitle.firstChild.nodeValue = objectIndex.title;

					 lightboxImg.src = "images/" + objectIndex.images;

					 //this makes it so you cant move the background after (cant scroll the page once is open)
        document.body.style.overflow = "hidden";

				// turn on the lightbox
				let lightboxClose = lightbox.querySelector('.close-lightbox');

        lightbox.style.display = 'block';
				window.scrollTo(0,0);


				lightboxClose.addEventListener('click', closeLightbox, false);


				function closeLightbox() {
						console.log("close lightbox worked");
						 lightbox.style.display = 'none';
							//This re activates the scroll
						 document.body.style.overflow = "visible";

							}


              /* For the image swapping example, something like this where if you click either arrow it adds to the object index count changing the image

              would have the next and previous linked to the button and when its clicked add or subtract the count.

              var i = objectIndex;

              function prevnextSwitch(param)
        {
            if(param === 'next')
            {
                i++;
                if(i === images.length){ i = images.length - 1; }
            }else{
                i--;
                if(i < 0){ i = 0; }
            }

            so it only gets triggered when the param does which would be the next or previous button so if next was clicked it would add but if it was next it could only be previous so it would subtract

        }
  */




  /* For the recommended

  Have a simlimar changelightbox images but for the recommended section if it was the video being clicked display all objectIndex.images for the src
  and if it was images being clicked display the main video say object objectIndex.mainvideo

  just a filtering option and when you play the video it switches again
  just trying to show that I understand the process to what I want to make I just couldnt excute it due to the new AJAX being very confusing for me
  if it was plain javascript with JSON objects I would be able to do this but I went ahead and did the AJAX first because I didnt want to make this then have to resart it if it was different


  */



			}

	      });

	})();

// Buttons
var video = document.querySelector("video"); //Make the video have the class of video

var playButton = document.querySelector('.play-pause');
var restartButton = document.querySelector('.restart-button');
var fullscreenButton = document.querySelector('.fullscreen-button');
var volumeslider =document.querySelector("#volumeslider");
var volumeButton = document.querySelector(".volume-button");
var progressBar = document.querySelector("#progress-bar");




// timer

video.ontimeupdate = function() {timer()};

function timer() {
  var time = Math.round(video.currentTime);
  var duration = Math.round(video.duration);
    document.getElementById("video-timer").innerHTML = "0:" + time + "/" + "0:" + duration ; //As of now this works but when it is over 1 minute, may break! Come back to this*

    //progress bar

    var progress = Math.round(time / duration * 100);

    progressBar.value = progress;

}



function playFunction() { // Declare a function

    if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button to show the pause image
    playButton.src = "images/pause.svg";
  } else {
    // Pause the video
    video.pause();

    // Update the image to show the play image
    playButton.src = "images/play.svg";
  }
}


function restartFunction() {
    video.currentTime = 0;
    video.play();
    playButton.src = "images/pause.svg"; //So it allows you to pause since I have it set to an autoplay
}


function fullscreenFunction() {
    if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
}


function setvolume(){

  var volume_value = video.volume;

	    video.volume = volumeslider.value / 100;
    //  console.log(volume_value);

      //If the volume is 0, it shows the mute button
      if (volume_value === 0) {
      volumeButton.src = "images/mute.svg";
    } else if (volume_value => 0.01) {
      video.muted = false; //This will counter act the muting feature
      volumeButton.src = "images/volume.svg";
      }

    }

    function muteFunction() {
      if(video.muted){
      video.muted = false;
      volumeButton.src = "images/volume.svg";
    } else {
      video.muted = true;
      volumeButton.src = "images/mute.svg";
    }

    }







  //Event Listeners
  playButton.addEventListener("click", playFunction, false);
  restartButton.addEventListener("click", restartFunction, false);
  fullscreenButton.addEventListener("click", fullscreenFunction, false);
  volumeslider.addEventListener("click", setvolume, false);
  volumeButton.addEventListener("click", muteFunction, false);

