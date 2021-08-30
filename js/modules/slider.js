function slider() {


    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 671,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });
}
export default slider;