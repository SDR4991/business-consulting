const hamburger = ()=>{
    const overlay = document.getElementById('overlay');
    const menuBars = document.getElementById('menu-bars');
    const nav1 = document.getElementById('nav-1');
    const nav2 = document.getElementById('nav-2');
    const nav3 = document.getElementById('nav-3');
    const nav4 = document.getElementById('nav-4');
    
    const navItems = [nav1, nav2, nav3, nav4];

    function navAnimation(direction1, direction2){
        navItems.forEach((nav, i)=>{
            nav.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`)
        })
    }

    function toggleNav(){
        menuBars.classList.toggle('change');
        overlay.classList.toggle('overlay-active');
        if(overlay.classList.contains('overlay-active')){
            overlay.classList.replace('overlay-slide-left','overlay-slide-right');
            navAnimation('out','in')
        }else{
            overlay.classList.replace('overlay-slide-right','overlay-slide-left');
            navAnimation('in','out')
        }
    }

    menuBars.addEventListener('click', toggleNav);
    navItems.forEach((nav)=>{
        nav.addEventListener('click',toggleNav);
    });
}

export default hamburger;
