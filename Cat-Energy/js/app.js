var menuBtn=document.querySelector(".page-header__menu-toggle"),jsMenuBtn=document.querySelector(".js-menu-toggle"),menu=document.querySelector(".main-nav");function showMenu(){menuBtn.classList.toggle("page-header__menu-toggle--closed"),menu.classList.toggle("main-nav--closed")}menuBtn.classList.add("page-header__menu-toggle--js");