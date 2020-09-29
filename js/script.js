(function($){
var typed = new Typed('span.txt-rotate',{
    strings: ["I'm a web developer.","I'm a WordPress Developer.","I'm a SEO Expert."],
    typeSpeed: 50,
    backSpeed: 100,
    fadeOut: false,
    smartBackspace: true,
    loop:true
});
})(jQuery);

$(document).ready(function(){
$('.projects-wrapper').isotope({
    filter: '*',
    layoutMode : 'masonry'
});

$('.list-filter a').click(function() {
    var selector = $(this).attr('data-filter');
    $('.list-filter a').removeClass('active');
    $(this).addClass('active');
    $('.projects-wrapper').isotope({
        filter: selector
    });

    return false;

})
$('.popup-image').magnificPopup({
type:'image',
closeOnContentClick : true,
gallery : {
    enabled : true,
    navigateByClick : true
}
});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("nav-bg-black");
        $(".navbar:after").css("opacity","1");
        
    } else {
        $(".navbar").removeClass("nav-bg-black");

    }
});
});


