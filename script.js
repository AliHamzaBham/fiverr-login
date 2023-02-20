const eye = document.querySelector('.eye');
const passInput = document.querySelector('.pass-input');
let n = 1;
eye.addEventListener('click', () => {
    if(n % 2 != 0){
        passInput.setAttribute('type', 'text');
        eye.src = "assets/eye-slash.svg";
        n++;
    }else {
        passInput.setAttribute('type', 'password');
        eye.src = "assets/eye.svg";
        n--;
    }
});