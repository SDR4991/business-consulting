const loadMore = (triggerSelector,blockSelector)=>{
    const btn = document.querySelector(triggerSelector),
        blocks = document.querySelectorAll(blockSelector);

    btn.addEventListener('click', ()=>{
        btn.classList.add('animate__animated','animate__fadeOut');
        btn.style.display = 'none';
        blocks.forEach(block =>{
            block.classList.add('animate__animated','animate__fadeIn');
            block.style.setProperty('--animate-duration', '2s');
            block.classList.remove('advantages__pic-hidden');
        })
    })
}

export default loadMore;