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
