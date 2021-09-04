import { Validator } from "../plugins/validator";

const validForm1 = new Validator({
    selector: '#form1',
    pattern: {
        name: /[а-я ]/ig,
        email: /[\w\s\S@]/ig,
        phone: /[0-9+]/ig,
    },
    method: {
        'form1-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'form1-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form1-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ]
    },
    errorMessage: {
        'form1-name': 'Имя должно быть более 2х символов, Русского алфавита',
        'form1-phone': 'Телефон может содержать только цифры и знак +',
        'form1-email': 'email должен содержать знак @ и название домена(.ru, .com и тд.)',
    }
});
const validForm2 = new Validator({
    selector: '#form2',
    pattern: {
        name: /[а-я ]/ig,
        email: /[\w\s\S@]/ig,
        phone: /[0-9+]/ig,
        text: /[\w\s\S-.?!)(,:]/ig,
    },
    method: {
        'form2-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'form2-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form2-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form2-message': [
            ['notEmpty'],
            ['pattern', 'text']
        ]
    },
    errorMessage: {
        'form2-name': 'Имя должно быть более 2х символов, Русского алфавита',
        'form2-phone': 'Телефон может содержать только цифры и знак +',
        'form2-email': 'email должен содержать знак @ и название домена(.ru, .com и тд.)',
    }
});
const validForm3 = new Validator({
    selector: '#form3',
    pattern: {
        name: /[а-я ]/ig,
        email: /[\w\s\S@]/ig,
        phone: /[0-9+]/ig,
    },
    method: {
        'form3-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'form3-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form3-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
    },
    errorMessage: {
        'form3-name': 'Имя должно быть более 2х символов, Русского алфавита',
        'form3-phone': 'Телефон может содержать только цифры и знак +',
        'form3-email': 'email должен содержать знак @ и название домена(.ru, .com и тд.)',
    }
});
export { validForm1, validForm2, validForm3 };
