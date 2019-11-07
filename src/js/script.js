$(document).ready(() => {
    // Установка виджета на поля с датой
    const $dateFields = $('input.input_date');
    $dateFields.minical({
        offset: {
            x: -15
        },
        initialize_with_date: false
    });

    // Маска для полей для телефона
    $('input[type="tel"]').mask("+7(999) 999-9999");

    // Переключение между страницами
    $('.nav__link').click(function (e) {
        $('.nav__link').removeClass('nav__link_active');
        $(this).addClass('nav__link_active');

        const index = $('.nav__link').index($('.nav__link_active'));
        const $contentActive = $('.content').eq(index);    
        const $contentHidden = $('.content').eq(index ? 0 : 1);

        $contentActive.addClass('content_active animated faster');        
        $contentHidden.removeClass('content_active animated faster');

        return false;
    });

});