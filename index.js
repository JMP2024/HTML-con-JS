const header = document.createElement("header");
const h1 = document.createElement("h1");
const navegacion = document.createElement("nav");

const lista = document.createElement("ul");
const listilla = document.createElement("li");
const listilla2 = document.createElement("li");
const listilla3= document.createElement("li");
const listilla4 = document.createElement("li");

const enlace = document.createElement("a");
const enlace2 = document.createElement("a");
const enlace3 = document.createElement("a");
const enlace4 = document.createElement("a");

const section = document.createElement("section")
const section2 = document.createElement("section")
const section3 = document.createElement("section")
const section4 = document.createElement("section")

const h2 = document.createElement("h2");
const h2_2 = document.createElement("h2");
const h2_3 = document.createElement("h2");
const h2_4 = document.createElement("h2");

const formulario = document.createElement("formulario-contacto");

const footer = document.createElement("footer")



h1.textContent = "IMPRESORAS 3D"
enlace.textContent = "IMPRESORAS DESTACADAS"
enlace2.textContent = "MARCAS"
enlace3.textContent = "OFERTAS"
enlace4.textContent = "CONTACTOS"
h2.textContent= "Destacadas"
h2_2.textContent= "Marcas"
h2_3.textContent= "Ofertas en impresoras 3D"
h2_4.textContent= "Contacto"
footer.textContent = "© 2024 Impresoras3D.com"

enlace.href= "#destacados";
enlace2.href= "#marcas";
enlace3.href= "#ofertas";
enlace4.href= "#contactos";

document.body.appendChild(header);
header.appendChild(h1);
header.appendChild(navegacion);
navegacion.appendChild(lista);

lista.appendChild(listilla);
lista.appendChild(listilla2);  
lista.appendChild(listilla3);
lista.appendChild(listilla4);

listilla.appendChild(enlace);
listilla2.appendChild(enlace2);
listilla3.appendChild(enlace3);
listilla4.appendChild(enlace4);

document.body.appendChild(section);
document.body.appendChild(section2);
document.body.appendChild(section3);
document.body.appendChild(section4);

section.appendChild(h2);
section2.appendChild(h2_2);
section3.appendChild(h2_3);
section4.appendChild(h2_4);

section4.appendChild(formulario);

document.body.appendChild(footer);
