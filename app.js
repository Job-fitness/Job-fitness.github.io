

let openBtn        = document.querySelector('#openBtn');
let closeBtn       = document.querySelector('#closeBtn');
let skillItems     = document.querySelector('#skillItems');
let openMenu       = document.querySelector('#openMenu');
let closeMenu      = document.querySelector('#closeMenu');
let navbar         = document.getElementsByClassName('.navbar');

closeBtn.classList = "offbtn";
skillItems.style.display = 'none';


openMenu.addEventListener('click', () => {
         closeMenu.style.display = 'block';
         openMenu.style.display = 'none';
         document.querySelector('.navbar').style.clipPath = 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)';

});



closeMenu.addEventListener('click', () => {
         openMenu.style.display = 'block';
         closeMenu.style.display = 'none';
         document.querySelector('.navbar').style.clipPath ='polygon(0 0, 100% 0%, 100% 0, 0 0)';
});


openBtn.addEventListener('click', () => {
         document.querySelector('#skillItems').style.display = 'block';
         closeBtn.classList = 'none';
         openBtn.classList  = 'offbtn';
});


closeBtn.addEventListener('click', () => {
        document.querySelector('#skillItems').style.display = 'none';
        closeBtn.classList = 'offbtn';
        openBtn.classList  = 'none';
});