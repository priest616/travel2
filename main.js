const navBtn = document.querySelector('.mobile-nav');
const nalst = document.querySelector('.mobilelst');
navBtn.addEventListener('click', ()=>{
    const visibility = nalst.getAttribute('data-visible');

    if (visibility == 'false') {
        nalst.setAttribute('data-visible', true);
        navBtn.setAttribute('aria-expanded', true);
    }else{
        nalst.setAttribute('data-visible', false);
        navBtn.setAttribute('aria-expanded', false);
    }
})