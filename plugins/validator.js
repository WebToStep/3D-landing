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
    }
    showError(error) {
        error.classList.remove('success');
        error.classList.add('error');
        if (error.nextElementSibling && error.nextElementSibling.classList.contains('validator-error')) {
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в поле ' + error.placeholder.toLowerCase();
        errorDiv.classList.add('validator-error');
        if (document.body.contains(errorDiv)) {
            console.log('ku');
        }
        const timer = setTimeout(() => {
            document.body.append(errorDiv);
            errorDiv.classList.add('active');
            setTimeout(() => {
                errorDiv.classList.add('hide');
                setTimeout(() => {
                    errorDiv.remove();
                }, 4000);
            }, 3000);
        }, 10);
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
        position:fixed !important;
        right: 20px !important;
        bottom: 20px !important;
         background: #fff;
         padding:5px 10px;
         width: 200px;
         height: 50px;
         margin: 0px auto;
         text-align: center; 
         border-radius: 0 2px 2px 0;
         border-left: 3px solid #af4c4c;
         font-size:12px;
         fontFamily: sans-serif;
         color:#af4c4c; 
         background: #ffd1d1 !important;
         opacity: 1 !important;
         transform: translateY(150%) !important;
         transition: 1s transform, opacity 4s;
        }
        .validator-error.active{
          transform: translateY(0) !important;
        display:unset;
      }
      .validator-error.hide{
        opacity: 0 !important;
      display:unset;
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
