const $dateFields = $('input.input_date');
$dateFields.minical({
    offset: {
        x: -15
    },
    initialize_with_date: false
});

$('input[type="tel"]').mask("+7(999) 999-9999");