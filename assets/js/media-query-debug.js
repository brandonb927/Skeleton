// Javascript for debug media queries - by cleatsandcode
// This requires Jquery loaded before this script. Toggle the visiblity of the info using the "t" key.
// Inspired by Johan Brook's css
// Enjoy!
//
// Modified by Brandon Brown - @brandonb927

$('body').prepend('<div id="mediaQueryDebug"><a href="#" title="Media Query Debug"><i class="icon-wrench"></i> <span>Toggle Debug</span></a></div><div id="viewportInfo"><div id="sizeInfo"></div></div>')

$('#sizeInfo').text('Viewport (Width: ' + $(window).width() + ' , Height: ' + $(window).height() + ' )')

$(window).resize(function () {
    $('#sizeInfo').text('Viewport (Width: ' + $(window).width() + ' , Height: ' + $(window).height() + ' )')
})

$(document).on('click', '#mediaQueryDebug a', function(e) {
    var $this = $(this)
    e.preventDefault()
    // Debug enabled on click
    $("#viewportInfo").fadeToggle()
})
.keydown(function (e) {
    // Debug enabled on keypress
    if(e.keyCode == 84 ) {
        $("#viewportInfo").fadeToggle()
    }
})