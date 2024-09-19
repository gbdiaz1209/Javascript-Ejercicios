/* si solo coloco hamb ya JS me detecta el import y doy click y el me autocompleta, no olvidar completar el .js */
/* el nombre del selector que me va hacer funcionar el html se llama panel-boton y 
el elemento que vamos a mover es selector panel que es el que esta ubicado en el html
como <aside class="panel"> donde sería adecuado invocar esto?
en la carga del documento, recordemos la clase que tuvimos donde vimos el DOMContentLoaded
 aqui se importa y carga todos los archivos*/

import hamburgerMenu from "./menu_burger.js";


/* en el evento DOMContenLoaded y pasamos el evento que representa la carga del documento
ecuto el menu de hamburguesa, solo estoy pasando el nombre de selectores, por el eso
el metodo matches esta esperando un selector valido podria ser (panel *)
*/

const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
hamburgerMenu(".panel-btn",".panel",".menu a");
});

/* ya estan en la pagina vemos nuestro menu y queremos selccionar alguna seccion
vemos que no se quita, entonces necesitariamos un tercer parametro en nuestra clase
menu_burguer que haria refrencia a un link del menu*/

