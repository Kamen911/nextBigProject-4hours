(function($) {
   $(document).on("ready", function() {
     // scroll indicator
     $(function() {
       $("a[href*=#aboutUs]").on("click", function(e) {
         e.preventDefault();
         $("html, body").animate(
           {
             scrollTop: $($(this).attr("href")).offset().top
           },
           500,
           "linear"
         );
       });
     });

     // toggle class on hamburgegr to overflow:hidden on body
     $(".navbar-toggler").on("click", function() {
       $("body").toggleClass("hamburger-on");
     });
   });
 })(jQuery);
