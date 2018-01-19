$(document).ready(function() {

  $("a").attr("target","_blank");

  function crisscross() {
    $('#left').css('bottom', '-' + window.scrollY + 'px');
    $('#right').css('bottom', '-' + window.scrollY + 'px');
  }

  function lines(){
	$('#anim .horizontal, #anim .perpendicular, #anim .diagonal, #anim .curve').fadeToggle();
   }

  function hideTitle(){
   	$('.top-title').slideUp(300);
  }

  
  $(window).scroll(hideTitle);

  var width;
  checkScroll();

  function checkScroll(){
    width = $(window).width();
    if(width > 600){
        $(window).scroll(crisscross);
    }
  }

  $(window).resize(function() {
    checkScroll();
  });

  $('.showfig').hover(function(){ 
  	var figID = (this.id); 
	$('.' + figID).fadeToggle();
  }); 


  $('.showall').hover(lines);

  $('.showdx').hover(function(){
  	$('#anim .horizontal').fadeToggle();
  });

  $('.showdy').hover(function(){
  	$('#anim .perpendicular').fadeToggle();
  });

  $('.showdd').hover(function(){
  	$('#anim .diagonal').fadeToggle();
  });

  $('.showdr').hover(function(){
  	$('#anim .curve').fadeToggle();
  });

});

            
