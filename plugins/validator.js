/* eslint-disable no-unused-vars */
class Validator {
    constructor({ selector, pattern = {}, method }) {
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter(item => item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button');
        this.error = new Set();
    }
    init() {
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
        this.form.addEventListener('submit', e => {
            this.elementsForm.forEach(elem => this.checkIt({ target: elem }));
            if (this.error.size) {
                e.preventDefault();
            }
        });
    }
    isValid(elem) {
        const validatorMethod = {
            notEmpty(elem) {
                if (elem.value.trim() === '') {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern) {
                return pattern.test(elem.value);
            }
        };
        if (this.method) {
            const method = this.method[elem.id];
            if (method) {
                return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
            }
        } else {
            console.warn('Необходимо передать id полей ввода и методы проверки этих полей!');
        }
        return true;
    }
    checkIt(event) {
        const target = event.target;
        if (this.isValid(target)) {
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
      //   console.log(this.error);
    }
    showError(error) {
        error.classList.remove('success');
        error.classList.add('error');
        if (error.nextElementSibling && error.nextElementSibling.classList.contains('validator-error')) {
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error');
        error.insertAdjacentElement('afterend', errorDiv);
    }
    showSuccess(success) {
        success.classList.remove('error');
        success.classList.add('success');
        if (success.nextElementSibling && success.nextElementSibling.classList.contains('validator-error')) {
            success.nextElementSibling.remove();
        }
    }
    applyStyle() {
        const style = document.createElement('style');
        style.textContent = `
      input.success{
         border: 2px solid #4CAF50 !important;
      }
      input.error{
         border: 2px solid #af4c4c !important;
         background: #ffd1d1 !important;
      }
      .validator-error{
         background: #fff;
         padding:5px 10px;
         width: 150px;
         margin: 0px auto;
         text-align: center; 
         vertical-align: center;    
         border-radius: 5px;
         font-size:12px;
         fontFamily: sans-serif;
         color:#af4c4c; 
      }`;
        document.head.appendChild(style);
    }
    setPattern() {
        if (!this.pattern.phone) {
            this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
        }
        if (!this.pattern.email) {
            this.pattern.email = /^\w+@\w+\.\w{2,}$/;
        }
    }
}
