const toggleBtn = document.querySelector('.mobile-menu-button')
const mobileMenu = document.querySelector('.mobile-menu')


toggleBtn.addEventListener('click',function(){
    mobileMenu.classList.toggle('hidden')
})