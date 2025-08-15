const hamburger2 = document.querySelector(".hamburger2");
const navMenuMobile2 = document.querySelector(".nav-menu-mobile2");
const overlay = document.querySelector(".overlay");

hamburger2.addEventListener("click", () => {
    hamburger2.classList.toggle("active");
    navMenuMobile2.classList.toggle("active");
    overlay.classList.toggle("active");

    // Evitar scroll cuando el menú está activo
    document.body.classList.toggle("menu-active");
});

// Manejo del acordeón (submenú)
document.querySelectorAll(".opc-submenu").forEach(item => {
    item.addEventListener("click", function() {
        // Si el item ya está abierto, lo cerramos
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            // Cerramos todos los demás
            document.querySelectorAll('.opc-submenu').forEach(otherItem => otherItem.classList.remove('active'));
            this.classList.add('active');
        }
    });
});