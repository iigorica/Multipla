const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// Contact form

    let errors = document.getElementById('error');


function validateName() {
    var name = document.getElementById('ime').value;

    if(name.length == 0){
        error.innerHTML = 'Ime je obavezno'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        error.innerHTML = 'Napišite puno ime i prezime'
        return false;
    }
    error.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if(email.length == 0){
        error.innerHTML = 'Email je obavezan'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.innerHTML = 'Napišite ispravan email';
        return false;
    }
    error.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true;
    
}