
$(document).ready(function () {
    $('.nav__burger').click(function() {
        $('.nav__list_header').toggleClass('active');
        $('body, html').toggleClass('overflow');
        $('.nav__burger').toggleClass('active');
    })

    $('.message__body').owlCarousel({
        loop: true,
        autoHeight: true,
        items: 1,
        nav: true,
        responsive: {
            0 : {
                stagePadding: 0,
                margin: 15
            },
            600 : {
                stagePadding: 50,
                margin: 55
            }
        }
    });

    $('.callback__btn').click(function(e) {
        e.preventDefault();
        $('.callback__form').find('.callback__field').each(function () {
            if ($(this).val() != '') {
                $(this).removeClass('callback__field_empty');
            } else {
                $(this).addClass('callback__field_empty');
            }
        });

        if(!$('.callback__field').hasClass('callback__field_empty')) {
            $('.callback__field').val('');
        }
    })
});