
$(document).ready(function () {
    $('.nav__burger').click(function() {
        $('.nav__list_header').toggleClass('active');
        $('body, html').toggleClass('overflow');
        $('.nav__burger').toggleClass('active');
    })

    $('.js-message__box').owlCarousel({
        loop: true,
        autoHeight: true,
        nav: true,
        responsive: {
            0 : {
                stagePadding: 5,
                items: 1,
                margin: 15
            },

            768 : {
                items: 2,
                stagePadding: 5,
                margin: 15
            },

            1024 : {
                items: 3,
                stagePadding: 5,
                margin: 15
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

    $('.footer__modal-item').click(function() {
        var $index = $(this).index();
        $('.footer-modal').removeClass('active');
        $('.footer-modal').eq($index).addClass('active');
        $('body, html').addClass('overflow');
    })

    $('.footer-modal__close').click(function() {
        $('.footer-modal').removeClass('active');
        $('body, html').removeClass('overflow');
    })

    $(document).mouseup(function(e) {
		var div = $('.footer-modal__body');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.footer-modal').removeClass('active');
            $('body, html').removeClass('overflow');
		}
	});
});