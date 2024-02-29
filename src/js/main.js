import accordion from "./modules/accordion";
import modal from "./modules/modal";

window.addEventListener('DOMContentLoaded',()=>{
    'use strict';
    
    modal();
    accordion('.accordion__heading','.accordion__block');
})