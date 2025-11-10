let harmMenu = document.querySelector('.harmburger-menu');
let navItems = document.querySelector('.nav-items');

harmMenu.addEventListener("click",()=>{
    harmMenu.classList.toggle("active");
    navItems.classList.toggle("active");
})
