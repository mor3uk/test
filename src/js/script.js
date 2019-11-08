// Установка виджета на поля с датой
const $dateFields = $('input.input_date');
$dateFields.minical({
    offset: {
        x: -15
    },
    initialize_with_date: false
});

// Для checkbox
$('.checkbox a').click(() => false);

// Маска для полей для телефонa
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

// Инициализация функции вне для отмены обработчика
const handleLegalInputChange = ({ target }) => {
    target.closest('.body-form')
        .querySelector('input[name="real-adress"]')
        .value = target.value;
};

// Скрытие и показ логических блоков с полями
document.querySelectorAll('input[name="match-legal-adress"]')
    .forEach(($adressCheck) => {
        $adressCheck.addEventListener('change', ({ target }) => {
            const $realAdressInput = target.closest('.body-form')
                .querySelector('input[name="real-adress"]');
            const $legalAdressInput = target.closest('.body-form')
                .querySelector('input[name="legal-adress"]');

            if (target.checked) {
                $realAdressInput.value = $legalAdressInput.value;
                $realAdressInput.setAttribute('disabled', true);
                $legalAdressInput.addEventListener('input', handleLegalInputChange);
            } else {
                $legalAdressInput.removeEventListener('input', handleLegalInputChange);
                $realAdressInput.value = '';
                $realAdressInput.removeAttribute('disabled');
            }
        });
    });

// Скрытие и показ дополнительных полей для лицензии
document.querySelectorAll('input[name="licensed"]')
    .forEach(($licenseCheck) => {
        $licenseCheck.addEventListener('change', ({ target }) => {
            const $licenseBody = target.closest('.body-form')
                .querySelector('.license__body');
            if (target.checked) {
                $($licenseBody).slideDown();
            } else {
                $($licenseBody).slideUp();
            }
        });
    });

document.querySelectorAll('input[name="is-perpetual"]')
    .forEach(($perpetualCheck) => {
        $perpetualCheck.addEventListener('change', ({ target }) => {
            const $validityInput = target.closest('.body-form__item')
                .querySelector('input[name="validity"]');
            const $freeInput = $validityInput.closest('.input-container')
                .querySelector('.input-wrapper');
            if (target.checked) {
                $validityInput.parentNode.classList.add('input-wrapper-0');
                $($validityInput.parentNode).slideUp(100);
                $freeInput.classList.remove('input-wrapper-2');
            } else {
                $($validityInput.parentNode).slideDown(100);
                $validityInput.parentNode.classList.remove('input-wrapper-0');
                $freeInput.classList.add('input-wrapper-2');
            }
        });
    });

// Скрытие и показ блоков для данных при отсутсвтии гражданства
document.querySelectorAll('input[name="nationality"]')
    .forEach(($nationCheck) => {
        $nationCheck.addEventListener('change', ({ target }) => {
            const $selectorsParent = target.closest('.body-form__item');
            
            const $countySelector = $selectorsParent
                .querySelector('select[name="nationality-country"]');
            const $visaDataSelector = $selectorsParent
                .parentNode.querySelector('.visa-data');
            const $migrationDataSelector = $selectorsParent
                .parentNode.querySelector('.migration-card-data');

            if (+target.value) {
                $($countySelector.parentNode.parentNode).slideUp(200);
                $($visaDataSelector).slideUp(200);
                $($migrationDataSelector).slideUp(200);
            } else {
                $($countySelector.parentNode.parentNode).slideDown(200);
                $($visaDataSelector).slideDown(200);
                $($migrationDataSelector).slideDown(200);
            }
        });
    });