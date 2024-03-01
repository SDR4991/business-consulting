const advantages = (blockSelector) =>{
    const blocks = document.querySelectorAll(blockSelector);

    blocks.forEach(block =>{
        block.addEventListener('mouseover',function(e){
            if(e.target === this){
               this.nextElementSibling.style.display = 'block';
               this.nextElementSibling.classList.add('animate__animated', 'animate__fadeIn');
               this.nextElementSibling.style.setProperty('--animate-duration', '1s')
            }
        })
    })
}

export default advantages;