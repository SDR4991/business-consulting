const modal = () =>{

    function openModal(triggerSelector,modalSelector,closeSelector){
        const btns = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelectorAll(closeSelector);

        btns.forEach(btn =>{
            btn.addEventListener('click',(e)=>{
                if(e){
                    e.preventDefault();
                }
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                modal.classList.add('animate__animated','animate__fadeIn');
            })
        })

        modal.addEventListener('click',(e)=>{
            if(e.target === modal){
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })

        close.forEach(close=>{
            close.addEventListener('click',()=>{
                modal.style.display = 'none';
                document.body.style.overflow = '';
            })
        })
    }

    openModal('[data-modal]','.modal','[data-close]');
    
}

export default modal;