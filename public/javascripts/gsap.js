const words = ["FULLSTACK DEVELOPER", 'PARTH']

let cursor = gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1 })

let masterTl = gsap.timeline({ repeat: -1 })

words.forEach(word => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
    tl.to('.pc', { duration: 1, text: word })
    masterTl.add(tl)
})

$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
})

$("#about").click(function () {
    console.log('about clicked')
    $('html, body').animate({
        scrollTop: $("#aboutsec").offset().top
    }, 1000);
});
$("#home").click(function () {
    console.log('about clicked')
    $('html, body').animate({
        scrollTop: $("#particle-js").offset().top
    }, 1000);
});