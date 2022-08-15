//eader for js
var menuBtn = document.querySelector('#menu-btn');
var closeBtn = document.querySelector('#close-btn');
var navbar = document.querySelector('.navbar');


menuBtn.onclick = () =>{
    navbar.classList.add('active')
}

closeBtn.onclick = () =>{
    navbar.classList.remove('active')
}










// market place tabs for javascript
function openCity(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "";
     
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.style.color = "#1A1021";
   
 
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




 


 //collections tab place bits

 
function openCitys(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
 




 