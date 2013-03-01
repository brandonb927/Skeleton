/**
 * Simple debugging tool for media queries
 *
 */
$(function() {
    var $debug = $('#debug'),
        $window = $(window)

    //  Window load and resize.
    $window.on('load resize', function() {
        if(debug) {
            if(window.matchMedia("(min-width: 768px) and (max-width: 959px)").matches) {
                $debug.html("Tablet (Portrait)")
            } else if(window.matchMedia("(min-width: 480px) and (max-width: 767px)").matches) {
                $debug.html("Mobile (Landscape)")
            } else if(window.matchMedia("(max-width: 767px)").matches) {
                $debug.html("Mobile (Portrait)")
            } else{
                $debug.html("Desktop & Tablet (Landscape)")
            }
            $debug.append(" – ("+ $window.width() + ' x '+ $window.height() +')px')
        }
    })
})