/* 
 * JS file for CAOS. Custom Javascript code goes here.
 */
$(function() {
    var window_width = $(window).width();
    $("#toggle-menu").click(function(){
        var toggle_menu = $(this);
        if (toggle_menu.hasClass('active')){
            toggle_menu.removeClass('active');
        } else {
            toggle_menu.addClass('active');
        }
        $('#menu').css('left', $('#menu').css('left') >= '10000px' ? window_width : $('#menu').css('left'));
        $('#menu').stop().show().animate({
            left: $('#menu').css('left') >= "10000px" ? "0" : window_width+"px"
        }, 500, function() { if ($('#menu').css('left') > 0) $('#menu').css('left', "10000px"); });
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