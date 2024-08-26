let openerBtn = document.getElementById('socialOpener');
let socials = document.getElementById('socials');
let arrow = document.getElementById('arrow');

/*
openerBtn.addEventListener('click', function(){
    if(socials.style.display == 'none'){
        socials.style.display = 'flex'
        arrow.classList.add('rotated')
    }
    else{
        socials.style.display = 'none'
        arrow.classList.remove('rotated')
    }
})
*/

openerBtn.addEventListener('click', function(){
    if(socials.style.opacity == 0){
        arrow.classList.add('rotated');
        socials.style.opacity = 1;
    }
    else{
        arrow.classList.remove('rotated');
        socials.style.opacity = 0;
    }
})