const menuToggle = document.querySelector("#hamburguer");
const mobileMenu = document.querySelector("#offset-menu")

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add("active")
})

const closeMenu = document.querySelector("#close-menu")

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove("active")
})

window.addEventListener('resize', () => {
  let width = window.innerWidth;

  width > 450 ? mobileMenu.style.display = 'none' : mobileMenu.style.display = 'flex'
})

const banner = document.querySelectorAll('.banner')
const dot = document.querySelectorAll('.dot')
let slideIndex = 0

console.log(banner.length)
function showSlide() {
  for (let i = 0; i < banner.length; i++) {
    banner[i].classList.remove("active");
    dot[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > banner.length) {
    slideIndex = 1;
  }

  banner[slideIndex - 1].classList.add("active");
  dot[slideIndex - 1].classList.add("active");

  setTimeout(showSlide, 3000);
}
showSlide()
