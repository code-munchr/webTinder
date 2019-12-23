
$(function()
{
	
var $activeSlide = $('#slides .slide:first-child');




$("#decline").on("click", function(){

   goToSlide('decline')

});
$("#approve").on("click", function(){

   goToSlide('approve')

});



function goToSlide(action) 
{
    $activeSlide.removeClass("showing");
    $activeSlide = $activeSlide.next(".slide");
   
    //send data to server   
    if(action == "approve")
    {

    }else
    {

    }
    $activeSlide.addClass("showing");
    // slides[currentSlide].className = 'slide';
    // currentSlide = (n+slides.length)%slides.length;
    // slides[currentSlide].className = 'slide showing';
}


});