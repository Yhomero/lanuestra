//aca van a ir los de la intro//


/* este parafo funciona 
    $(document).ready(function() {      
    setTimeout(quitar, 3500);
  });
*/
  function quitar(){
    var entrada = document.getElementById("au-intro");
    entrada.parentNode.removeChild(entrada);
  }
  

 window.sr = ScrollReveal();
 sr.reveal('.au-intro-botella', {duration: 3000, origin: "top", delay: 1500})
 sr.reveal('.au-intro-tarro', {duration: 1000, origin: "top", delay:2700})
//aca comienzan lo de scroll reveal
window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 4000,
    origin: 'left',
    distance:'-400px'
    /*delay: 1*/
});

//aca el deslizamiento suave entre IDs al momento de hacer click en los hreg
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});