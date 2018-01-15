<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shane Fry - UI Work</title>
    <link rel="stylesheet" href="styles/foundation.css">
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="js/minified/TweenMax.min.js"></script>
  </head>
  <body onload="loadData();">
    <h1 class="hidden">Shane Fry - UI Work</h1>


  <header class="row">


    <h2 class="hidden">Header</h2>

    <div class="row">
   <div class="small-12 small-offset-0 columns show-for-small-only">
      <div class="title-bar" data-responsive-toggle="main-menu" data-hide-for="">

          <button class="menu-icon float-left" type="button" data-toggle="main-menu" >
          </button>
          <img class="mobile_nav_logo" src="images/header_logo.png" alt="OBJ logo">
        </div>
    </div>

     <nav id="main-menu" class="row show-for-small-only"><!--Main Navigation-->
         <h2 class="hidden">Mobile Navigation</h2>
           <ul id="mainNav">
         <li class="small-12 columns"><a href="index.html">HOME</a></li>
         <li class="small-12 columns"><a href="about.html">ABOUT</a></li>
       <li class="small-12 columns end"><a href="work.html">WORK</a></li>
         <li class="small-12 columns end"><a href="contact.php">CONTACT</a></li>
           </ul>
     </nav>

      </div>


    <nav class="hide-for-small-only medium-8 medium-centered header_nav_medium columns">
      <h2 class="hide">Desktop Navigation</h2>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <img src="images/header_logo.png" alt="logo img">
    <a href="work.html">Work</a>
    <a href="contact.php">Contact</a>
    </nav>


  </header>


<div id="video_section">
<div class="row">
  <div class="small-6 small-centered columns">
    <h2 class="ui_titles">3D/VIDEO WORK</h2>
  </div>
</div>

<div class="row">
  <h3 class="hidden">Main Video</h3>
  <div class="small-10 small-centered columns">
    <video poster="images/demo_reel.jpg">
        <source src="videos/test.mp4" type="video/mp4">
    <!--    <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.

IM NOT SURE HOW THE AJAX LINKING OF THE VIDEOS WORKS SO IM LEAVING IT BLANK AS OF NOW LEAVING THE FALL BACKS TO SHOW I WOULD DO IT, TREVOR SAID HIS PART ISNT DUE TILL I PRESENT SO THE AJAX ISNT FINISHED YET.
      -->
</video>

<div class="video_control_bar">
  <img class="play-pause" src="images/play.svg" alt="play and pause button" width="20" height="20">
  <img class="restart-button" src="images/restart.svg" alt="restart button" width="20" height="20">
  <img class="volume-button" src="images/volume.svg" alt="volume button" width="20" height="20">
  <input id="volumeslider" type="range" min="0" max="100" value="100" step="1">
  <img class="fullscreen-button" src="images/fullscreen.svg" alt="restart button" width="20" height="20">
  <p><span id="video-timer"></span></p>
  <progress id="progress-bar" value="0" max="100"> </progress>
</div>

  </div>
</div>

<div class="row">
  <div class="small-5 small-push-1 medium-3 medium-push-0 columns">
    <h3 class="hidden">Sub Video 1</h3>
        <video  poster="images/odell_video.jpg">
          <source src="videos/test.mp4" type="video/mp4">
        </video>
  </div>
  <div class="small-5 small-push-1 medium-3 medium-push-0 columns end">
    <h3 class="hidden">Sub Video 2</h3>
    <video poster="images/car_video.jpg">
      <source src="videos/test.mp4" type="video/mp4">
    </video>
  </div>
  <div class="small-5 small-push-1 medium-3 medium-push-0 columns">
    <h3 class="hidden">Sub Video 3</h3>
    <video poster="images/got_video.jpg">
      <source src="videos/test.mp4" type="video/mp4">
    </video>
  </div>
  <div class="small-5 small-push-1 medium-3 medium-push-0 columns end">
    <h3 class="hidden">Sub Video 4</h3>
    <video poster="images/soccer_video.jpg">
      <source src="videos/test.mp4" type="video/mp4">
    </video>
  </div>
</div>
</div>

<div id="logos_title_back">
<div class="row">
  <div class="small-8 small-centered columns">
    <h2 class="ui_titles">MY LOGOS</h2>
  </div>
</div>
</div>




<div id="lightbox">
  <div class="small-10 small-centered columns">
    <i class="fa fa-times close-lightbox"> </i>
    <h2 class="lightboxTitle">Gallery!</h2>
    <img src="" alt="large preview image" class="Lightbox-img">
  </div>




</div>



<div class="row" id="logo1">

</div>

<div class="row logosdiv" id="logotest">
 <!-- <div class="small-12 medium-3 columns clone">
    <h3 class="hidden">Sub Logo 1</h3>
    <img class="ui_logo" src="images/obj_logo.png" alt="OBJ logo">
  </div>
    <h1 class="request-state"></h1>
  <div class="small-12 medium-3 columns">
    <h3 class="hidden">Sub Logo 2</h3>
    <img class="ui_logo" src="images/lori_designs.png" alt="lori designs logo">
  </div>
  <div class="small-12 medium-3 columns">
    <h3 class="hidden">Sub Logo 3</h3>
    <img class="ui_logo" src="images/crunicans_logo.png" alt="Crunicans Logo">
  </div>
  <div class="small-12 medium-3 columns">
    <h3 class="hidden">Sub Logo 4</h3>
    <img class="ui_logo" src="images/sweets_logo.png" alt="shanes sweets logo">
  </div>-->
</div>

<div id="graphics_title_back">
<div class="row">
  <div class="small-8 small-centered columns">
    <h2 class="ui_titles">OTHER GRAPHIC WORK</h2>
  </div>
</div>
</div>


<div class="row">
  <div class="small-12 medium-6 columns">
    <h3 class="hidden">Overlays</h3>
    <img class="graphic_work" src="images/Overlay.png" alt="stream overlay">
  </div>
  <div class="small-12 medium-6 columns">
    <h3 class="hidden">Vector Art</h3>
    <img class="graphic_work" src="images/Faces.png" alt="vector image of girls">
  </div>
</div>











<footer id="work_footer">
  <h2 class="hidden">Footer</h2>
  <div class="row">

    <div class="small-8 small-push-2 medium-4 medium-push-0 columns end">
      <div class="footer_social">
      <a href="https://www.linkedin.com/in/shane-fry-5a139a142/"><img class="footer_icon" src="images/linkedin-logo.png" alt="Linkedin Logo"></a>
        <a href="https://www.facebook.com/shane.fry.75"><img class="footer_icon" src="images/facebook-logo.png" alt="Facebook Logo"></a>
        <a href="https://twitter.com/?lang=en"><img class="footer_icon" src="images/twitter-logo.png" alt="twitter Logo"></a>
        <a href="https://www.linkedin.com/in/shane-fry-5a139a142/"><img class="footer_icon" src="images/instagram-logo.png" alt="instagram Logo"></a>
      </div>

      <div class="footer_nav">
        <h3 class="hidden">Footer Nav</h3>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="contact.php">Contact</a></li>
        </ul>
      </div>

    </div>

    <div class="small-8 small-push-2 medium-3 medium-push-4 end columns copyright">
      <h3 class="hidden">Footer Info</h3>
      <p>&copy; 2018 - Shane Fry, All Rights Reserved </p>
    </div>

  </div>

</footer>



    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/prod/production.min.js"></script>
    <script src="js/modules/module_ajax.js"></script>
    <script src="js/modules/modules_lightbox.js"></script>
    <script src="js/modules/modules_video_controls.js"></script>
    <script src="js/main.js"></script>


  </body>
</html>
