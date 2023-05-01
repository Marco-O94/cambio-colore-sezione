var sections = document.querySelectorAll('observed_sections');
var section_plus = document.querySelectorAll('observed_sections_plus');

window.addEventListener("scroll", function() {

 /* Da qui si regola l'ingresso animazione: 
 * Parte da un valore offsetTop della prima sezione
 * 
 */
 let sectionsHeight = sections[0].offsetTop;
 let optionalSec = 0;
 
	/* */
 for(let i = 0; i < sections.length; i++) {
	 // da qui si modifica la condizione dell'optionalSec se in futuro si devono aggiungere sezioni con lo stesso colore a seguire
     i === 3 ? optionalSec = section_plus[i].offsetHeight : optionalSec = 0;
     if(window.scrollTop() >= sectionsHeight && window.scrollTop() < sectionsHeight + sections[i].offsetHeight + optionalSec) {
       (i + 1) % 2 === 0 ? change_state_1() : change_state_2();
 }
 sectionsHeight += sections[i].offsetHeight + optionalSec;
 }

});

const change_state_1 = () => {
  // Inserire qui i cambiamenti per lo stato 1
}
const change_state_2 = () => {
  // Inserire qui i cambiamenti per lo stato 2
}
