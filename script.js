/**
 * Created by hen_s on 2016-08-03.
 */

$(document).ready(function() {
    var scrollTop = $(window).scrollTop();
    var checkIfTop = (scrollTop == 0);
    var navbar = $('.navbar');
    var collapse = $('.collapse');

    //Navbar color on page load
    if (screen.width <= 600) {
        navbar.css('background-color', 'transparent');
        collapse.css("background-color", "#242B35");
        collapse.css("border-color", "transparent");
    } else if (screen.width > 600 && scrollTop > 0) {
        navbar.css('background-color', '#242B35');
        $('.navbar li a, .navbar').css('font-size', '15px');
    } else {
        navbar.css('background-color', 'transparent');
        $('.navbar li a, .navbar').css('font-size', '12px');
    }


    //Close collapse menu after click on small screens
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });


    //Slide animation images
    $(".slideanim").each(function() {
        var pos = $(this).offset().top;

        if (pos < scrollTop + 600) {
            $(this).removeClass("hideImage");
        } else {
            $(window).on('scroll', function() {
                $(".slideanim").each(function() {
                    var pos = $(this).offset().top;

                    if ((screen.height > 1000) && (pos < scrollTop + 800)) {
                        $(this).addClass("animated fadeInUp");
                        $(this).removeClass("hideImage");
                    } else if ((screen.height < 800) && (pos < scrollTop + 600)) {
                        $(this).addClass("animated fadeInUp");
                        $(this).removeClass("hideImage");
                    }
                });
            });
        } //end else
    });

    //Navbar slide function
    $(window).on('scroll', function() {
        scrollTop = $(window).scrollTop();

        if (scrollTop == 0 && screen.width > 600) {
            checkIfTop = true;
            navbar.css('background-color', 'transparent');
            $('.navbar li a, .navbar').css('font-size', '12px');

        } else if (scrollTop != 0 && screen.width > 600) {
            if (checkIfTop) {
                checkIfTop = false;
                navbar.css('background-color', '#242B35');
                $('.navbar li a, .navbar').css('font-size', '15px');
            }
        }
    });


    //Smooth scroll
    $(".navbar a, .jumbotron a, footer a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }
    });
});