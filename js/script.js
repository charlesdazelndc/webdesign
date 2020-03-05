/* =============================
   ||      Preloader  ||
================================ */
$(window).on("load",function(){
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut();
	
});

// var waypoint = new Waypoint({
//   element: document.getElementById('waypoint'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   }
// })

$(function(){
    $('.counter').counterUp({
    delay: 10,
    time: 5000
   
});

});

$(function() {
    $("#workstation-content").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});



$(function() {
    $(".client-list").owlCarousel({
        items: 8,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});