$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
       console.log("Document ready..");
       
        $(".me").hover(
            function() {
                $(this).addClass('hover').css('cursor', 'crosshair');
            },
            function() {
                $(this).removeClass('hover');
            }
        );

        $(".app").hover(
            function() {
                $(this).addClass('hover');
            },
            function() {
                $(this).removeClass('hover');
            }
        );
    // document ready  
});

function increment() {
    console.log("Oh hello.. didn't expect to see you here.");
}

increment();