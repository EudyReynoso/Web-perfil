//Menu class selector
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const btn_descargar = document.querySelector('.btn-get');
const overlay = document.querySelector('.overlay');
const btn_Phone = document.querySelector('.btn-phone');

menuIcon.addEventListener('click', () =>{

    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

btn_Phone.addEventListener('click', () =>{
    swal.fire({
        title:'<i class="AlertIcon fab fa-whatsapp"></i>',
        html:'<span class="end-alert">829-682-9541</span>',
         // html:<span class="end-alert">¡Disponible todo el dia!</span>,
        // html:'<i class="AlertIcon fab fa-whatsapp"></i>',
        footer: '<span class="end-alert">¡Disponible todo el dia!</span>',
        //width: "0%",
        position: "top",
        confirmButtonText:"Ok",
        confirmButtonColor: "#ff4b5c"
    })
})