// Javascript for debug media queries - by cleatsandcode
// This requires Jquery loaded before this script. Toggle the visiblity of the info using the "t" key.
// Inspired by Johan Brook's css
// Enjoy!

$('body').prepend("<div id='viewportInfo' style='position:fixed;width:100%;padding:4px 1em;background:#00ff00;z-index:1;'><div id='sizeInfo'></div></div>");
$('#sizeInfo').text('Viewport (Width: ' + $(window).width() + ' , Height: ' + $(window).height() + ' )');
    $(window).resize(function () {
        $('#sizeInfo').text('Viewport (Width: ' + $(window).width() + ' , Height: ' + $(window).height() + ' )');
    });
$(document).keydown(function (e) {
    if(e.keyCode == 84 ) {
        $("#viewportInfo").toggle();
    }
});