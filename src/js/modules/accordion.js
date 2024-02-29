const accordion = (triggerSelector,blockSelector)=>{
    const triggers = document.querySelectorAll(triggerSelector),
        blocks = document.querySelectorAll(blockSelector);

    blocks.forEach(modal =>{
        modal.classList.add('animate__animated','animate__fadeInDown')
    })

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
                this.nextElementSibling.style.display='block';
            }else{
                this.classList.remove('active');
                this.nextElementSibling.style.display ='none';
            }   
        })
    })
}

export default accordion;