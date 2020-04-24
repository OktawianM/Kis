 
// Materialize initializations

 $(document).ready(function(){
  $('.parallax').parallax();          
  $('.scrollspy').scrollSpy();  
  $('.sidenav').sidenav();
  $('a').click(function(){
  $('html, body').animate({scrollTop: $( $(this).attr('href')).offset().top},900);});
  $('.fixed-action-btn').floatingActionButton({direction: 'top'});
  $('.collapsible').collapsible();
});


function timeCounter(){


  //getting the current time
  var d=new Date();
  var weekday=new Array("Niedziela","Poniedziałek","Wtorek","Środa","Czwartek", "Piątek","Sobota");
  var months = ["Stycznia", "Luty", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"];

  document.getElementById("day").innerHTML = weekday[d.getDay()];
  document.getElementById("day").style.color = "rgb(139, 0, 2)";            
  document.getElementById("dayDate").innerHTML = d.getDate();
  document.getElementById("monthDate").innerHTML = months[d.getMonth()];
  document.getElementById("yearDate").innerHTML = d.getFullYear()+"r.";   


  //counting time remained to start year and session    
              
  var countDownToStart = new Date("Oct 1, 2019 00:00:00").getTime();     
  var countDownToSession = new Date("Feb 1, 2020 00:00:00").getTime();     

  var x = setInterval(function() {
    var now = new Date().getTime();

    var distanceToStart = countDownToStart - now;
    var distanceToSession = countDownToSession - now;

    var daysToStart = Math.floor(distanceToStart / (1000 * 60 * 60 * 24));
    var hoursToStart = Math.floor((distanceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesToStart = Math.floor((distanceToStart % (1000 * 60 * 60)) / (1000 * 60));
    var secondsToStart = Math.floor((distanceToStart % (1000 * 60)) / 1000);
    document.getElementById("toStart").innerHTML = daysToStart + "d " + hoursToStart + "h "+ minutesToStart + "m " + secondsToStart + "s ";

    var daysToSession = Math.floor(distanceToSession / (1000 * 60 * 60 * 24));
    var hoursToSession = Math.floor((distanceToSession % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesToSession = Math.floor((distanceToSession % (1000 * 60 * 60)) / (1000 * 60));
    var secondsToSession = Math.floor((distanceToSession % (1000 * 60)) / 1000);
    document.getElementById("toSession").innerHTML = daysToSession + "d " + hoursToSession + "h " + minutesToSession + "m " + secondsToSession + "s ";

    if (distanceToStart < 0) {
      clearInterval(x);
      document.getElementById("toStart").innerHTML = "Semestr letni rozpoczęty!";
    }

    else if (distanceToSession < 0) {
       clearInterval(x);
       document.getElementById("toStart").innerHTML = "Sesja trwa. Powodzenia!";
    }
  }, 1000);

}




     