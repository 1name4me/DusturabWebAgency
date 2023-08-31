// Sticky Navbar
window.onscroll = function() {stickyNavbar()}

const navbar = document.getElementById("header")
const toggleSticky = "sticky"

// window.addEventListener("scroll", () => {
//     const currentScroll = window.scrollY;  
//     if (currentScroll > 150) {
//         navbar.classList.add(toggleSticky)
//     } 
//     else {
//         navbar.classList.remove(toggleSticky)
//     }
// }) 

function stickyNavbar() {
    const currentScroll = window.scrollY;  
    if (currentScroll > 110) {
        navbar.classList.add(toggleSticky)
    } 
    else {
        navbar.classList.remove(toggleSticky)
    }
}
// -------------------------------

const navbarHeight = navbar.offsetHeight;
document.documentElement.style.setProperty(
    "--scroll-padding",
    navbarHeight + "px"
)

// document.querySelectorAll('a[href&="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView()
//     })
// })

