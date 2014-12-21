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
    $('#logout, .btn, .ui-button').button().click(function(){console.log('button clicked');});
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
    $('.form-row').each(function(){
       if($(this).find('.editable-field').length == 1) {
           $(this).find('.inline-fields').hide();
           var $this = $(this);
           $(this).find('.edit-link').click(function(){
               $this.find('.inline-fields').show();
               $this.find('.edit-link').hide();
               $this.find('.editable-field').hide();
               return false;
           });
           $(this).find('.inline-fields a').click(function(){
               $this.find('.inline-fields').hide();
               $this.find('.edit-link').show();
               $this.find('.editable-field').show();
               return false;
           });
       }
    });
});