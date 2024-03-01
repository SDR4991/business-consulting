const accordion = (triggerSelector,blockSelector)=>{
    const triggers = document.querySelectorAll(triggerSelector),
        blocks = document.querySelectorAll(blockSelector);

    function hideblocks(){
        blocks.forEach(modal =>{
            modal.style.display = 'none';
        })
    }
    
    triggers.forEach(trigger =>{
        trigger.addEventListener('click', function(){
            if(!this.classList.contains('active')){
                triggers.forEach(trigger =>{
                    trigger.classList.remove('active');
                })
                hideblocks();
                this.classList.add('active');
                this.nextElementSibling.classList.add('animate__animated','animate__fadeInDown');
                this.nextElementSibling.style.display='block';
                this.nextElementSibling.style.setProperty('--animate-duration', '2s');
            }else{
                this.classList.remove('active');
                this.nextElementSibling.style.display ='none';
            }   
        })
    })
}

export default accordion;