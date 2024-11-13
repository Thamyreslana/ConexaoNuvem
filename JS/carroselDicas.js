document.addEventListener("DOMContentLoaded", function() {
    var swiper1 = new Swiper("#carrosel1", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: "#carrosel1 .swiper-button-next",
            prevEl: "#carrosel1 .swiper-button-prev",
        },
        pagination: {
            el: "#carrosel1 .swiper-pagination",
        },
        keyboard: true,
    });

    var swiper2 = new Swiper("#carrosel2", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: "#carrosel2 .swiper-button-next",
            prevEl: "#carrosel2 .swiper-button-prev",
        },
        pagination: {
            el: "#carrosel2 .swiper-pagination",
        },
        keyboard: true,
    });
});