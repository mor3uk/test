const emptyFieldMessage = 'Обязательное поле';
const tooShortMessage = 'Минимальная длина поля {0} символов';
const tooLongMessage = 'Максимальная длина поля {0} символов';
const incorrectDateMessage = 'Введена некорректная дата';

const generateErrorMessage = (fieldName) => {
    if (fieldName) {
        return `Некорректный ${fieldName}`;
    }
    return 'Введены некорректные данные';
};

const required = {
    depends: function () {
        setTimeout(() => $(this).val($.trim($(this).val())), 600);
        return true;
    }
};

// Генераторы для сокращения кода
const generateRuleForDigits = (symbolCount) => ({
    required,
    digits: true,
    rangelength: [symbolCount, symbolCount]
});

const generateRuleForStrings = (minlength, maxlength) => ({
    required,
    minlength,
    maxlength
});

const generateMessagesForDigits = (fieldName) => ({
    required: emptyFieldMessage,
    digits: generateErrorMessage(fieldName),
    rangelength: generateErrorMessage(fieldName),
    number: generateErrorMessage(fieldName)
});

const generateMessagesForStrings = () => ({
    required: emptyFieldMessage,
    minlength: tooShortMessage,
    maxlength: tooLongMessage
});

const validateObj = {
    rules: {
        ['inn']: generateRuleForDigits(11),
        ['ogrn']: generateRuleForDigits(11),
        ['ip-name']: generateRuleForStrings(3, 100),
        ['bank-name']: generateRuleForStrings(3, 100),
        ['bic']: generateRuleForDigits(9),
        ['payment']: generateRuleForDigits(20),
        ['correspondent']: generateRuleForDigits(20),
        ['legal-adress']: generateRuleForStrings(10, 100),
        ['real-adress']: generateRuleForStrings(10, 100),
        ['license-kind']: generateRuleForStrings(10, 100),
        ['license-num']: generateRuleForDigits(15),
        ['license-given-by']: generateRuleForStrings(10, 100),
        ['list-kind']: generateRuleForStrings(10, 100),
        ['certificate-num']: generateRuleForDigits(15),
        ['agency-name']: generateRuleForStrings(10, 100),
        ['fio']: generateRuleForStrings(10, 100),
        ['manager-tel']: { required },
        ['manager-email']: { required, email: true },
        ['post']: generateRuleForStrings(10, 100),
        ['birthplace']: generateRuleForStrings(10, 100),
        ['pasport-series']: generateRuleForDigits(4),
        ['pasport-number']: generateRuleForDigits(6),
        ['pasport-given-by']: generateRuleForStrings(10, 100),
        ['migration-card-number']: generateRuleForDigits(9),
        ['migration-card-series']: generateRuleForDigits(9),
        ['visa-number']: generateRuleForDigits(9),
        ['visa-series']: generateRuleForDigits(9),
        ['date-issue']: { required },
        ['date-entry']: { required },
        ['birthday']: { required },
        ['pasport-entry']: { required },
        ['start-date-card']: { required },
        ['end-date-card']: { required },
        ['start-date-visa']: { required },
        ['end-date-visa']: { required },
        ['pasport-entry']: { required },
        ['validity']: { required },
        ['nationality-country']: { required }
    },
    messages: {
        ['inn']: generateMessagesForDigits('ИНН'),
        ['ogrn']: generateMessagesForDigits('ИНН'),
        ['ip-name']: generateMessagesForStrings(),
        ['bank-name']: generateMessagesForStrings(),
        ['bic']: generateMessagesForDigits('БИК банка'),
        ['payment']: generateMessagesForDigits('расчетный счет'),
        ['correspondent']: generateMessagesForDigits('корреспондентский счет'),
        ['legal-adress']: generateMessagesForStrings(),
        ['real-adress']: generateMessagesForStrings(),
        ['license-kind']: generateMessagesForStrings(),
        ['license-num']: generateMessagesForDigits('номер лицензии'),
        ['license-given-by']: generateMessagesForStrings(),
        ['list-kind']: generateMessagesForStrings(),
        ['certificate-num']: generateMessagesForDigits('номер'),
        ['agency-name']: generateMessagesForStrings(),
        ['fio']: generateMessagesForStrings(),
        ['manager-tel']: {
            required: emptyFieldMessage,
            rangelength: generateErrorMessage('номер')
        },
        ['manager-email']: {
            required: emptyFieldMessage,
            email: generateErrorMessage('email')
        },
        ['post']: generateMessagesForStrings(),
        ['birthplace']: generateMessagesForStrings(),
        ['pasport-series']: {
            required: emptyFieldMessage,
            digits: 'Некорректно указана серия паспорта',
            rangelength: 'Некорректно указана серия паспорта'
        },
        ['pasport-number']: generateMessagesForDigits('номер паспорта'),
        ['pasport-given-by']: generateMessagesForStrings(),
        ['migration-card-number']: generateMessagesForDigits('номер'),
        ['migration-card-series']: {
            required: emptyFieldMessage,
            digits: 'Некорректно указана серия',
            rangelength: 'Некорректно указана серия'
        },
        ['visa-number']: generateMessagesForDigits('номер визы'),
        ['visa-series']: {
            required: emptyFieldMessage,
            digits: 'Некорректно указана серия визы',
            rangelength: 'Некорректно указана серия визы',
            number: 'Некорректно указана серия визы'
        },
        ['date-issue']: { required: emptyFieldMessage },
        ['date-entry']: { required: emptyFieldMessage },
        ['birthday']: { required: emptyFieldMessage },
        ['pasport-entry']: { required: emptyFieldMessage },
        ['start-date-card']: { required: emptyFieldMessage },
        ['end-date-card']: { required: emptyFieldMessage },
        ['start-date-visa']: { required: emptyFieldMessage },
        ['end-date-visa']: { required: emptyFieldMessage },
        ['pasport-entry']: { required: emptyFieldMessage },
        ['validity']: { required: emptyFieldMessage },
        ['nationality-country']: { required: emptyFieldMessage }
    }
};

$('form[name="body-form"]').validate(validateObj);
$('form[name="last-body-form"]').validate(validateObj);