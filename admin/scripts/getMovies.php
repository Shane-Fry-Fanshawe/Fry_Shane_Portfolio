<?php
//Generates JSON looking code (Loading movies, filtering movies, linking content)

  //Turn on error reporting
  //DELETE THIS WHEN YOU GO LIVE SINCE IT CAN GIVE OUT PASSWORDS ETC.
  //-----------

  //ini_set('display_errors', 1);
  //error_reporting(E_ALL);

  //----------

  //Connect to database
  include('connect.php');

    //$HTTP_GET_VARS same as "$_GET" but not globally scoped




//What happens when the pages laods?
if(isset($_GET['filter'])){ //issest checks if something is checked
  //echo "yup";
  // 1.) Filters movies by genre
  $filter = $_GET['filter'];
  $filterQuery = "SELECT m.movies_id, m.movies_cover, m.movies_title ,m.movies_year FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id AND g.genre_name = '{$filter}'";
  //echo $filterQuery;
  $getMovies = mysqli_query($link, $filterQuery);

}else if(isset($_GET['id'])){
  // 2.) Return a single movie
  $id = $_GET['id'];
  //echo $id; just want the IDs number to be returned
  $querySingle = "SELECT * FROM tbl_movies WHERE movies_id={$id}";
  //echo $querySingle;
  $getMovies = mysqli_query($link, $querySingle);

}else if(isset($_GET['srch'])){ //pass through the "super global"?
  //3.) Returns movies from user search
  $srch = $_GET['srch'];
  //echo $srch;

  $querySrch = "SELECT movies_id, movies_title, movies_year, movies_cover FROM tbl_movies WHERE movies_title LIKE '%srch%' ORDER BY movies_title ASC";
  //echo $querySrch;
  $getMovies = mysqli_query($link, $querySrch);

}else{
  //4.)Returns all Movies
$movieQuery = "SELECT movies_id, movies_title, movies_year, movies_cover FROM tbl_movies ORDER BY movies_title ASC"; //  This is just the variable holding the SQL query
$getMovies = mysqli_query($link, $movieQuery); //This is the same as running the SQL code in PHPmyadmin and click go to see what it gives your
//echo $getMovies; was a test to see if it was an object not a string

}




//while loop is better then the for loop, because you dont have to set a variable of "i", a max, etc
//it goes in and whens theres nothing left it stops, PES example
//$moveResult is thee vairable

//this will write to the page, and it will clear the page and not make a "cash"

$grpResult = "";
echo "[";

while($moveResult = mysqli_fetch_assoc($getMovies)){
  //echo $moveResult['movies_id']; test
   $jsonResult = json_encode($moveResult); // This writes it out as JSON for us
   // ".=" so it doesnt keep getting replaced
   $grpResult .= $jsonResult.",";
}

//0 = end, -1 means get rid of that character
echo substr($grpResult, 0, -1);

echo "]";



  mysqli_close($link); //Connet.php "Token", Closes if it passes?



 ?>
