var click = 0;
  $(document).ready(function() {  
    //setTimeout(function(){ $('#preloader').fadeOut(350,function(){$(this).remove();});if(window.location.href == "https://www.cervezaminerva.mx/" || window.location.href == "https://www.cervezaminerva.mx/en/")setTimeout(autoplay, 800); }, 1000);
  });
  $(".nav-toggle").click(function() {
      if(click == 0){
        click = 1;
        $(this).toggleClass("active");
        $(".minerva-principal-menu").toggleClass("active");
        setTimeout(function(){ $(".div-with-opacity").toggleClass("active"); }, 500);
      }
      else{
        click = 0;
        $(this).toggleClass("active");
        $(".div-with-opacity").toggleClass("active");
        setTimeout(function(){ $(".minerva-principal-menu").toggleClass("active"); }, 500);
      }
      
  });

jQuery(window).load(function () {
  setTimeout(function(){ 
    $('#preloader').fadeOut(350,function(){$(this).remove();
      if($("#validator").length <= 0){
        setTimeout(function(){ 
          $("a.ver-video-campania").trigger("click");
        }, 1000);
      }

          
    });
    //if(window.location.href == "https://www.cervezaminerva.mx/" || window.location.href == "https://www.cervezaminerva.mx/en/")setTimeout(autoplay, 800); 
  }, 500);
  
});