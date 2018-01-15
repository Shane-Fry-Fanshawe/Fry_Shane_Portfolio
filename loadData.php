<?php
//Set up connection creds

$user = "root";
$pass = ""; // for PC
// $pass = "root"; for MAC only
$url = "localhost"; //Usually this, but it may change to an IP adress depending on the web hoster
$db = "db_shane_fry_portfolio";




//Dont touch -

//Creates us an access token to our database
$link = mysqli_connect($url, $user, $pass, $db); /*MAC ONLY "8889" Leave the "" * This is your localhost"port number here"/); */

//Check Connection and give Error Message
if(mysqli_connect_errno()){
  printf("Connection Failed: %s\n", mysqli_connect_error());
  exit();
}
//echo "connection established";
// -
$sql = "select * from tbl_logos";
$result = mysqli_query($link, $sql);

$myArray = array();
if ($result = mysqli_query($link, $sql)) {

    while($row = mysqli_fetch_assoc($result)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
}

mysqli_close($link);


?>
