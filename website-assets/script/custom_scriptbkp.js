// Navbar toggle

$(document).ready(function() {
    if ($(window).width() > 991) {
        $(".navbar-light .d-menu").hover(
            function() {
                $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
            },
            function() {
                $(this)
                    .find(".sm-menu")
                    .first()
                    .stop(true, true)
                    .delay(120)
                    .slideUp(100);
            }
        );
    }
});

// Sticky header
$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 20) {
            $(".stickyHeader").addClass("headerActive");
        } else {
            $(".stickyHeader").removeClass("headerActive");
        }
    });
});

// Facilities slider
var swiper = new Swiper(".styleFacilitiesslider", {
    speed: 2000,
    loop: false,
    autoplay: true,
    pagination: true,
    clickable: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 0,
        },

        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
        2000: {
            slidesPerView: 6,
            spaceBetween: 40,
        },
    },
});

//Counter

const animationDuration = 4000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (t) => t * (2 - t);

const animateCountUp = (el) => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);

    const counter = setInterval(() => {
        frame++;

        const progress = easeOutQuad(frame / totalFrames);

        const currentCount = Math.round(countTo * progress);

        if (parseInt(el.innerHTML, 10) !== currentCount) {
            el.innerHTML = currentCount;
        }

        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
};

const countupEls = document.querySelectorAll(".timer");
countupEls.forEach(animateCountUp);


// TEstionials slider
var swiper = new Swiper(".testimonialSlider", {
    speed: 2000,
    loop: false,
    autoplay: true,
    pagination: true,
    clickable: true,
    navigation: {
        nextEl: ".testimonialsArrow-button-next",
        prevEl: ".testimonialsArrow-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 40,
        },

        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 1.3,
            spaceBetween: 0,
        },
    },
});

// Happy client slider

var swiper = new Swiper(".happyClientslider", {
    speed: 2000,
    loop: false,
    autoplay: true,
    centeredSlides: true,
    clickable: true,
    // navigation: {
    //     nextEl: ".testimonialsArrow-button-next",
    //     prevEl: ".testimonialsArrow-button-prev",
    // },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 40,
        },

        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
    },
});

// Testimonials slider
var swiper = new Swiper(".testimonialsSlider", {
    autoplay: true,
    speed: 3000,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Awards slider

var swiper = new Swiper(".awardsSlider", {
    speed: 2000,
    loop: false,
    autoplay: true,

    clickable: true,
    // pagination: {
    //     el: ".swiper-pagination",
    // },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 40,
        },

        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


// blog slider 
var swiper = new Swiper(".blogSlider", {
    speed: 2000,
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".blog-next",
        prevEl: ".blog-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 40,
        },

        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});

// Services Detail slider
var swiper = new Swiper(".serviceDetailslider", {
    speed: 2000,
    loop: false,
    autoplay: true,
    centeredSlides: true,
    clickable: true,
    navigation: {
        nextEl: ".serviceDetailnext",
        onhover: true,
        //   prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },

        1440: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
    },
});

// Service Details Logo Slider
var swiper = new Swiper(".servicesdetailLogoslider", {
    speed: 2000,
    loop: false,
    autoplay: true,

    clickable: true,
    // pagination: {
    //     el: ".swiper-pagination",
    // },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 40,
        },

        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

var swiper = new Swiper(".managementContentsliderwrapper", {

    direction: "vertical",
    centeredSlides: false,
    loop: false,
    speed: 3000,
    autoplay: false,
    pagination: {
        pagination: false,
    },
    navigation: {
        nextEl: ".ceo",
        prevEl: ".chairman",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: 'horizontal',
        },


        320: {
            slidesPerView: 1,
            spaceBetween: 80,
            direction: 'horizontal',
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: 'horizontal',
        },
        425: {
            slidesPerView: 1,
            direction: 'horizontal',
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            direction: 'horizontal',
            spaceBetween: 10,

        },
        1000: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1366: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },

});




// var selector = '.managementNav h6 span';

// $(selector).on('click', function() {
//     $(selector).removeClass('active');
//     $(this).addClass('active');
// });


// Read more

$(".show-more").click(function() {
    if ($(".text").hasClass("show-more-height")) {
        $(this).text("Show Less  -");
    } else {
        $(this).text("Show More +");
    }

    $(".text").toggleClass("show-more-height");
});

// Scroll to top

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(window).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
        $(".scroll-top").show();
    } else {
        $(".scroll-top").hide();
    }
});


// Clients slider
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".myClientsSlider", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        autoplay: {
            delay: 0,              // no pause
            disableOnInteraction: false,
        },
        speed: 5000,               // smooth continuous speed
        freeMode: true,            // free scrolling
        freeModeMomentum: false,   // no bounce
        allowTouchMove: true,      // swipe on mobile
        breakpoints: {
            576: { slidesPerView: 3 },   // sm
            768: { slidesPerView: 4 },   // md
            992: { slidesPerView: 5 },   // lg
            1200: { slidesPerView: 6 },  // xl
        }
    });
});
