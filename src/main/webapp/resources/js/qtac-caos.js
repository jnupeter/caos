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
        $('body').toggleClass('hide-body');
        return false;
    });
    $('#logout, .btn, .ui-button').button().click(function(){alert('button clicked');});
    $('#key-dates .arrow-down').click(function() {
        $('#key-dates .dates-container').animate({
            scrollTop: $('#key-dates div').offset().top
        }, 2000);
        return false;
    });
    $('#key-dates .arrow-up').click(function() {
        $('#key-dates .dates-container').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
});