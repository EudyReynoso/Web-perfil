//Menu class selector
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const btn_descargar = document.querySelector('.btn-get');
const btn_Phone = document.querySelector('.btn-phone');

menuIcon.addEventListener('click', () =>{

    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
});

btn_Phone.addEventListener('click', () =>{
    swal.fire({
        title:"whatsapp",
        html:'<i class="AlertIcon fab fa-whatsapp"></i>',
        footer: 'Disponible todo el dia!'
    })
})