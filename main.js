let openerBtn = document.getElementById('socialOpener');
let socials = document.getElementById('socials');
let arrow = document.getElementById('arrow');

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