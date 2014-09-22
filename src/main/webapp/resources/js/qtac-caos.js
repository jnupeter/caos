/* 
 * JS file for CAOS. Custom Javascript code goes here.
 */
$(function() {
    $("#toggle-menu").click(function(){
        $('#menu').stop().show().animate({
            left: $('#menu').css('left') == "-230px" ? "0" : "-230px"
        }, 500);
        $('#wrap').stop().animate({
            left: $('#wrap').css('left') == "0px" ? "230px" : "0"
        }, 500);
        return false;
    });
    $('#logout, .btn, .ui-button').button().click(function(){alert('button clicked');});
    $('#banner .arrow-down').click(function() {
        $('#banner .key-dates').animate({
            scrollTop: $("#banner .key-dates").offset().top
        }, 2000)
    });
});