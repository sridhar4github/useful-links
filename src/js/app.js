//a href target blank
$(document).ready(function(){
$('.content a').attr('target', '_blank');
});

if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}