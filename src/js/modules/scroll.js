const scroll = () =>{
    const btnUp = document.getElementById('up'),
        scrollBlock = document.getElementById('scroll-up');

    function scrollToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    function scrollFunction() {
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
            scrollBlock.classList.add('animate__animated', 'animate__slideInUp');
            scrollBlock.hidden = false;
        } else {
            scrollBlock.hidden = true;
        }
    }

    btnUp.addEventListener('click',scrollToTop);
    window.addEventListener('scroll',scrollFunction);
}

export default scroll;