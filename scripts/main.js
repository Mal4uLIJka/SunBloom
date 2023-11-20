let menu_status = false;
let menu_btn = document.getElementById('menu');
let menu = document.getElementById('menu_');

function foot(x) {
    if (x.matches) { 
        document.getElementById('footer').innerHTML = "Правила пользования<br>© 2023 SunExp Ltd.";
    } else {
        document.getElementById('footer').innerHTML = "Правила пользования © 2023 SunExp Ltd.";
    }
  }

function menu_bar(){
    if (menu_status == false){
        menu_btn.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
        menu.style.top = "78px";
        menu_status = true;
    } else {
        menu_btn.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
        menu.style.top = "-100%";
        menu_status = false;
    }
}
  
let footer = window.matchMedia("(max-width: 447px)");
foot(footer);
footer.addListener(foot);