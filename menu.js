const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')
const closemenu = document.querySelector('#close');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})
closemenu.addEventListener('click', (e)=>{
    e.preventDefault();
    menu.classList.remove('menu--show');
});
