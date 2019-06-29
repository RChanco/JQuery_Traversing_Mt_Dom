$(document).ready(function(){

//hides all panels when a panel is clicked
$(".theButton").click(function(){
    $("#panel.container").siblings().hide();
})
 
 //hides only the panel that was clicked
    $(".theButton").click(function(){
    $(this).hide();
    })
    
//adds a fadeTo to all panels when a panel is clicked
$(".theButton").click(function() {
    $("#panel.container").siblings().fadeTo(1000,.5);
});

//restores all panels when a panel is clicked
$(".theButton").click(function(){
    $("#panel.container").siblings().fadeTo(1000, 1);
});

//Turns panel background black on mouseenter
$(".theButton").mouseenter(function(){
    $(this).addClass("makeBlack");
});

//Returns to original colour on mouseout
$(".theButton").mouseout(function(){
    $(this).removeClass("makeBlack");
});

});