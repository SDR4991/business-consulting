const inputMask = (inputName,inputPhone) =>{
    const phone = document.querySelectorAll(inputPhone),
        name = document.querySelectorAll(inputName);
       


    phone.forEach(input =>{
        input.addEventListener('keypress',function(e){
            if(e.key.match(/[^0-9]/ig)){
                e.preventDefault();
            }
        })
    })

    name.forEach(input =>{
        input.addEventListener('keypress',function(e){
            if(e.key.match(/[^A-Za-z]/ig)){
                e.preventDefault();
            }
        })
    })


    function createMask(event) {
        let matrix = '+_ (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        }
    }

    phone.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
}

export default inputMask; 