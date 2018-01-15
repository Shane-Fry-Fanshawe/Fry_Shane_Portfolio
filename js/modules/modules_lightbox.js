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
