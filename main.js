const btn = document.getElementById("menu-btn")
const dropdown = document.getElementById("dropdown")
const navbar = document.querySelector(".navbar")


btn.addEventListener ("click", () => {
    dropdown.classList.toggle("open")
})

document.addEventListener("click", (e) => {
  const clickDentroDelMenu = dropdown.contains(e.target)
  const clickEnNavbar = navbar.contains(e.target)

  if (!clickDentroDelMenu && !clickEnNavbar) {
    dropdown.classList.remove("open")
  }
})