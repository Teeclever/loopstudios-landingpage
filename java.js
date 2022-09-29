const toggleButton = document.getElementsByClassName('toggle-button')[0];
const menuList = document.getElementsByClassName('menu-list')[0];



toggleButton.addEventListener('click', () =>{
    menuList.classList.toggle("active")
});