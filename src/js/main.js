import accordion from "./modules/accordion";
import modal from "./modules/modal";
import advantages from "./modules/advantages";
import loadMore from "./modules/loadMore";
import scroll from "./modules/scroll";
import inputMask from "./modules/inputMask";
import form from "./modules/form";
import hamburger from "./modules/hamburger";

window.addEventListener('DOMContentLoaded',()=>{
    'use strict';
    
    modal();
    accordion('.accordion__heading','.accordion__block');
    advantages('.advantages__pic_img');
    loadMore('.advantages__btn','.advantages__pic-hidden');
    scroll();
    inputMask('[name="name"]','[name="phone"]');
    form();
    hamburger();

})