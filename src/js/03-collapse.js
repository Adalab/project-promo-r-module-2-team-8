"use strict";
arrow.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log(event.currentTarget);
    if (event.currentTarget.classList.contains('diseña')){        
        fillBox.classList.add('collapse');
        formBox.classList.add('collapse');
        designBox.classList.toggle('collapse');
    }  else if  (event.currentTarget.classList.contains('comparte')){ 
        console.log (event.currentTarget);
        fillBox.classList.add('collapse');
        designBox.classList.add('collapse');
        formBox.classList.remove('collapse');
    }
});
//flechita para abajo <i class="fa-solid fa-angle-down"></i>
// flechita para arriba <i class="fa-solid fa-angle-up"></i>