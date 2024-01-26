'use strict';

$(document).ready(() => {
    let menu = $('#menu');
    let formInputs = $('.form__input');
    let productInputColor = formInputs.css('border-color');

    $('#burger').click(function () {
        menu.addClass('open');
    });

    $('#menu *').click(() => {
        menu.removeClass('open');
    });

    let productInput = $('#product-input');

    $('.product__btn').click((e) => {
        productInput.val($(e.target).parents('.product').find('.product__title').text());
        $('.order')[0].scrollIntoView({behavior: "smooth"});
    })

    $('.promo__btn').click((e) => {
        $('.products')[0].scrollIntoView({behavior: "smooth"});
    })

    let loader = $('.loader');
    $('#order-btn').click(function () {
        let hasError = false;

        $('.error-input').hide();
        formInputs.css('border-color', productInputColor);

        for (let input of formInputs) {
            let element = $(input);
            if (!element.val()) {
                element.css('border-color', 'red');
                element.next().show();
                hasError = true;
            }
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {product: productInput.val(), name: $('#name').val(), phone: $('#phone').val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('.order__form').hide();
                        $('.success-message').show();
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                        formInputs.val('');
                    }
                });
        }
    });
});