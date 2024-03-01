import {postData} from "../services/request";

const form = () =>{
    const forms = document.querySelectorAll('.modal__form'),
        inputs = document.querySelectorAll('.modal__input');
    
    const message = {
        loading: 'Data is processing...',
        complete: 'Thank for your request',
        error : 'Something went wrong. Try Again Pls',
        spinner: 'assets/images/icons/spinner.svg'
    }

    function clearInputs(){
        inputs.forEach(input =>{
            input.value = '';
        })
    }

    forms.forEach(form =>{
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.appendChild(statusMessage);

            setTimeout(() => {
                form.style.display = 'none';
            }, 400);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(form);
            let url = 'assets/server.php'

            postData(url,formData)
                .then(res =>{
                    console.log(res);
                    textMessage.textContent = message.complete;
                })
                .catch(() => {
                    textMessage.textContent = message.error;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.add('fadeInOut');
                    }, 5000);
                });
        })
    })
}

export default form;