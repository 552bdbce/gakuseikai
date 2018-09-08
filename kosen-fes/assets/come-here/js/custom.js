/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function () {

 /*====================================
          SUBSCRIPTION   SCRIPTS 
    ======================================*/


   $("#postcontent").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "subscribe.php",
            data: $("#postcontent").serialize(),
             success: function (response) {
			  $('[name="email"]').val('');
               // alert(response); // FOR ACTUAL RESPONSE
			   alert('Thanks for  subscribing Us');
            }
        });
        e.preventDefault();
    });
  /*====================================
        BACKGROUND  SLIDESHOW  SCRIPTS 
  ======================================*/
           
    $.backstretch([
"assets/img/1.png", // change image url here
"assets/img/2.jpg",
"assets/img/3.jpg"
    ], { duration: 2000, fade: "slow" }); // duration is in milliseconds

   /*====================================
           COUNTDOWN CUSTOM SCRIPTS 
   ======================================*/

    setInterval(function () {

        var enddate = new Date("Aug 20 2017 00:00:00 GMT+05:30"); // change your date here like Jan 10 2016 GMT+05:00

        var today = new Date();

        var difference = Math.floor((enddate.getTime() - today.getTime()) / 1000);

        var seconds = GlobalFunctn(difference % 60);

        difference = Math.floor(difference / 60);

        var minutes = GlobalFunctn(difference % 60);

        difference = Math.floor(difference / 60);

        var hours = GlobalFunctn(difference % 24);

        difference = Math.floor(difference / 24);

        var days = difference;

        $("#second-number").text(seconds);

        $("#minute-number").text(minutes);

        $("#hour-number").text(hours);

        $("#day-number").text(days);

    }, 1000);

    function GlobalFunctn(valuesmy) {

        if (valuesmy < 0)

            valuesmy = 0;

        if (valuesmy < 10)

            return "0" + valuesmy;

        return "" + valuesmy;

    }
});

