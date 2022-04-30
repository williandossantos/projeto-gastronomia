
let button = document.querySelector('#e-btn');
let navbar = document.querySelector('#navbar');
let form = document.querySelector('#form');
button.addEventListener('click', ()=>{
    if (navbar.style.display === "block" && form.style.display) {
        navbar.style.display = "none";
        form.style.display = "none";
      } else {
        navbar.style.display = "block";
        form.style.display = "block";
      }
})
