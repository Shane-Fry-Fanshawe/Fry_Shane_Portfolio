<?php
  require_once('admin/scripts/config.php');
  if(isset($_POST['name'])){

    $direct = "thankyou.php";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $street = $_POST['street'];
    $message = $_POST['message'];
    //echo $name;

    if($street === ""){
      //echo "sent mail";
      $sendMail = submitMessage($direct, $name, $email, $message);
    }
    /*else{
      echo "try again";
    } */

  }
 ?>


<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shane Fry - Contact</title>
    <link rel="stylesheet" href="styles/foundation.css">
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="js/minified/TweenMax.min.js"></script>
  </head>
  <body>
    <h1 class="hidden">Shane Fry - Contact </h1>


  <header id="contact_header" class="row">


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
         <h2 class="hide">Mobile Navigation</h2>
           <ul id="mainNav">
         <li class="small-12 columns"><a href="index.html">HOME</a></li>
         <li class="small-12 columns"><a href="about.html">ABOUT</a></li>
       <li class="small-12 columns end"><a href="work.html">WORK</a></li>
         <li class="small-12 columns end"><a href="contact.html">CONTACT</a></li>
           </ul>
     </nav>

      </div>


    <nav class="hide-for-small-only medium-8 medium-centered header_nav_medium columns">
      <h2 class="hide">Desktop Navigation</h2>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <img src="images/header_logo.png" alt="OBJ logo">
    <a href="work.html">Work</a>
    <a href="contact.html">Contact</a>
    </nav>


  </header>

<div id="fill_in">
<div id="contact_section">

<div class="row">
  <div class="small-10 small-centered medium-8 columns">
    <h2 id="contact_title">GET <span> IN TOUCH</span></h2>
    <img id="profile_pic" src="images/profile_pic.png" alt="Shane Profile Picture">
    <p id="contact_info">If you are interseted in working with me please fill out the following information and send me an email:</p>
  </div>
</div>




<form action="contact.php" method="post">
  <h2 class="hidden">Contact Forum</h2>
<div class="row">

  <div class="small-12 medium-4 medium-push-2 columns">
    <h3 class="hidden">Name Input</h3>
    <input id="stop_spam" name="street" type="text" size="21" maxlength="30" />
    <input type="text" id="name" name="name" placeholder="Please enter your name...">
  </div>
  <div class="small-12 medium-4 columns medium-push-2 end">
    <h3 class="hidden">Email Input</h3>
    <input type="text" id="email" name="email" placeholder="Please enter your email...">
  </div>
</div>

<div class="row">
  <h3 class="hidden">Comment Input</h3>
  <div class="small-8 small-centered columns">
    <textarea id="subject" name="message" placeholder="Comment..." style="height:200px"></textarea>
  </div>
</div>

<div class="row">
  <h3 class="hidden">Submit</h3>
  <div class="small-8 small-centered columns">
    <input type="submit" value="Submit">
  </div>
</div>
</form>

<!--  <div class="row">
  <div class="small-8 small-centered columns">
      <h2>Thank you </h2> < ?php echo $name; ? > I would get rid of those spaces*
  </div>
</div> -->

</div>




<footer>
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
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>

    </div>

    <div class="small-8 small-push-2 medium-3 medium-push-4 end columns copyright">
      <h3 class="hidden">Footer Info</h3>
      <p>&copy; 2018 - Shane Fry, All Rights Reserved </p>
    </div>

  </div>

</footer>
</div>


    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/prod/production.min.js"></script>
  </body>
</html>
