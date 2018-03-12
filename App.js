
import {Persona} from 'Persona.js';
import {TITULO_PAGINA} from 'Constantes.js';

document.getElementById('titulo').innerHTML= TITULO_PAGINA;

let nonmbre= prompt("Digite su nombre");
let edad= prompt("Digite su edad");

let persona= new persona(nombre,edad);

document.getElementById('nombre').innerHTML=persona.getNombre();
document.getElementById('edad').innerHTML= persona.getEdad();
document.getElementById('saludo').innerHTML= persona.saludo();
