//Jquery ******************
(function($) {
   $(document).on("ready", function() {

      // toggle class on hamburgegr to overflow:hidden on body
      $(".navbar-toggler").on("click", function() {
         $("body").toggleClass("hamburger-on");
      });

   });
})(jQuery);

// JavaScript ******************

// Counter
function getTimeRemaining(endtime) {
   var t = Date.parse(endtime) - Date.parse(new Date());
   var minutes = Math.floor((t / 1000 / 60) % 60);
   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
   var days = Math.floor(t / (1000 * 60 * 60 * 24));
   return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
   };
}

function initializeClock(id, endtime) {
   var clock = document.getElementById('clock-wrapper');
   var daysSpan = clock.querySelector('.days');
   var hoursSpan = clock.querySelector('.hours');
   var minutesSpan = clock.querySelector('.minutes');

   function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

      if (t.total <= 0) {
         clearInterval(timeinterval);
      }
   }

   updateClock();
   var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

initializeClock('clockdiv', deadline);



