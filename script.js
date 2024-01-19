let menu  = document.querySelector('#menubars');
let navbar  = document.querySelector('.navbar');


menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}


let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');



toggleBtn.onclick = ()=>{
    themeToggler.classList.toggle('active');
    
}

window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
    themeToggler.classList.remove('active');

}


document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
btn.onclick = ()=>{
        let color= btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color);
    }
});

