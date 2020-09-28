$(document).ready (function(){
    console.log("&&&&&&&&&&& JQUERY WAYPOINT &&&&&&&&&&&&&&&&&&");
    $('.js--aboutus').waypoint(function(direction) {
        console.log("------INSIDE JQUERYS------")
    if(direction == 'down') {
        $('.nav').addClass('sticky');
        $('.sticky-logo').addClass('visible');
    } else {
        $('.nav').removeClass('sticky');
        $('.sticky-logo').removeClass('visible');
    }
}, {
    offset: '50px'
})

})