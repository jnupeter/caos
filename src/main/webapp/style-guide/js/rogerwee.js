/*
 * JS file for CAOS. Custom Javascript code goes here.
 */
$(function() {
    $('head').append('<link rel="stylesheet" type="text/css" href="style-guide/css/rogerwee.css">');
    $('body').prepend('' +
        '<div id="sticky-bar">' +
        '   Pages: ' +
        '   <a href="1-application-closed.html">1</a> ' +
        '   <a href="2-application-open.html">2</a> ' +
        '   <a href="3-application-statuses.html">3</a> ' +
        '   <a href="4-my-application.html">4</a> ' +
        '   <a href="5-education-and-experience.html">5</a> ' +
        '   <a href="6-my-details.html">6</a> ' +
        '   <a href="style-guide.html">Style Guide</a> ' +
//        '   <a href="#" id="toggle-overlay">Toggle Overlay</a> ' +
        '</div>' +
//        '<div id="example-overlay"><img src="resources/images/overlay-home-1.jpg"/></div>' +
        '');
    if(window.location.pathname.indexOf('3') > -1 || window.location.pathname.indexOf('4') > -1) {
        $('#sticky-bar').append('' +
        '   Change Status: <a href="" id="status-on-hold">On Hold</a> ' +
        '   <a href="" id="status-in-progress">In Progress</a> ' +
        '   <a href="" id="status-withdrawn">Withdrawn</a> ' +
        '   <a href="" id="status-offer-received">Offer Received</a>');
    }
//    $("#toggle-overlay").click(function() { $('#example-overlay').toggle();});
    $("#status-on-hold").click(function() {
        $('.application-status .status').html('<span class="icon-on-hold"></span>On Hold');
        return false;
    });
    $("#status-in-progress").click(function() {
        $('.application-status .status').html('<span class="icon-in-progress"></span>In Progress');
        return false;
    });
    $("#status-withdrawn").click(function() {
        $('.application-status .status').html('<span class="icon-withdrawn"></span>Withdrawn');
        return false;
    });
    $("#status-offer-received").click(function() {
        $('.application-status .status').html('<span class="icon-offer-received">1</span>Offer Received!');
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('#sticky-bar, #example-overlay').addClass("sticky");
        }
        else{
            $('#sticky-bar, #example-overlay').removeClass("sticky");
        }
    });
});