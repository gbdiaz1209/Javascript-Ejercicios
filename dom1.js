// console.log(document.getElementsByTagName("li"));
// // este un metodo que nos devuelve que por nombre de etiqueta tenga un li
// //parece un arreglo pero es una coleccion
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("menu"));

// //Todos estos son elementos de html
// //estos 3 primeros getElements han sido reemplazados por estos dos metodos
// // muy populares. 
// // 1-queryselector y querySelectorAll (consulta de selector)
// //recibe como parametro un selector valido de CSS, un ID 
// // una clase, una etiqueta html
// console.log(document.querySelector("#menu"));
// //no solo sirve pra ID sino para buscar todos los enlaces que tenga mi pagina
// //el solo va  atraer el primer selector que hayas especificado
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a"));
// //estos querysselector devuelve NodeList los demas devuelven 
// // colecciones es decir devuelven diferentes tipos de datos
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((i) => console.log(i));
// // console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card"));

// console.log(document.querySelectorAll(".card")[2]);

// console.log(document.querySelectorAll("#menu li"));

// console.log(document.querySelector("#menu li"));

// -------------- CLASE 4 DOM - ATRIBUTOS Y DATA-ATRIBUTES  -------

//los atributos en html tienen la particularida de tener una sola palabra

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// //aparentemente nos da el mismo resultado
// console.log(document.querySelector(".link-dom").href);
// //detectar toda url del live server de las imagenes
// //con que attribute me aseguro que solo traiga el atributo
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "en"; //cambia en tiempo real el valor de la etiqueta lang
// document.documentElement.setAttribute("lang", "es-MX");
// //recibe el nombre del atributo y el nuevo valor.
// // SI MIRAMOS EN EL ELEMENT en consola fijamos que ya cambio
// //cambiamos es a es-MX

// //Es muy tedioso estar escribiendo document.document
//lo que podemos hacer es guardar en variables.

// //porque se guardó en const y no en Let para guardar estas variables del DOM
// //Cuanod hablamos de objetos y arreglos JS se refiere es al valor de referencia
// // y no modifica lo que esta dentro.
// //A modo de sugerencia se recomienda a las variables creadas para guardar elementos del DOM
// // anteponerles un signo $

// const $linkDOM = document.querySelector(".link-dom");
// //establecer valores que no tiene.
// //si le doy click al enlace DOM esta recargando la misma pagina por la href
// //tenemos un atributo que se llama target con _blank eso lo abriría en una nueva
// // pestaña. 
// $linkDOM.setAttribute("target","_blank");

// $linkDOM.setAttribute("rel","noopener");
// //significa que no hay dependencia entre la ventana que estamos abriendo
// // y la ventana origen 
// //cuando abrimos una nueva pestaña con navegacion podemos 
//que sea insegura o evitar algun tipo de hackeo
 
// $linkDOM.setAttribute("href","https://youtube.com/jonmircha");

// console.log($linkDOM.hasAttribute("rel"));

// //si queremos borrar algun atributo
// $linkDOM.removeAttribute("rel");

// console.log($linkDOM.hasAttribute("rel"));

// // DATA-ATTRIBUTES QUE PASA SI QUEREMOS TRABAJAr con ellos
// //PARA UTILIZARLOS

// console.log($linkDOM.getAttribute("data-description"));
// //imprime en console Document Object Model
// // La manera obetenerlo desde la anotacion del punto que tbn es valido
// //todos estos attribute los guarda a manera de un mapa o collectionJS
// //que se llama Dataset
// console.log($linkDOM.dataset);
// /* asi se ve en consola
// DOMStringMap {description: 'Document Object Model'}
// description:"Document Object Model"
// [[Prototype]]:DOMStringMap

// es un DOMSTRINGMAP. Dice es un objeto que solo tiene un Data-Attribute
// ahora si a mi codigo html le pongo un id y recargo vere que ya me aparece 
// otro attribute

// DOMStringMap {id: '1', description: 'Document Object Model'}
// description:"Document Object Model"
// id:"1"
// [[Prototype]]:DOMStringMap

// cada data-attribute lo va guardando en una PROPIEDAD de ese mapa

// COMO PODRIAMOS MODIFICAR EL DATA-ATTIBUTE
// R/ Podemos hacerlo con el Dataset o con la anotacion del punto.
// // */
// // console.log($linkDOM.dataset.id);
// // console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description", "Modelo Objeto del Documento");
// console.log($linkDOM.dataset.description);
// //Como sería con la anotación del punto?

// $linkDOM.dataset.description = "Suscribete a mi Canal y Comparte";

// // console.log($linkDOM.dataset.description);


// // ---------------- CLASE 5 Estilos y Variables   ------------------------------

// /*
// const $linkDOM = document.querySelector(".link-dom");
// console.log($linkDOM.style.backgroundColor);

// console.log($linkDOM.style.Color);
// /*Como ver las propiedades dinamicas es bastante diferente al css style declaration, 
// es mediante windows Computed Style */
// console.log($linkDOM.style);
// /*podemos acceder a los estilos de otra manera, pero no arroja los mismos resultados
// .style accedo al mapa donde tengo todos las propiedades  que se pueden aplicar validas
// y el get. attribute me muestra las que declaré*/
// console.log($linkDOM.getAttribute("style"));
// /*si deseo acceder a la propiedad en particular, con la anotacion del punto es muy comodo*/

// console.log(window.getComputedStyle($linkDOM));
// /*en el momento que se ejecuta es una mapa diferente, porqeu aqui mapea, porque a cada propiedad le asigna
// un indice, las ordena de forma alfabetica, nosotros accedimos a traves de la consola que 
// atodas las propiedades disponibles en CSS.
// es decir con el punto style me muestra solo las propiedades que yo afecté en cambio cuando accedo 
// a las computedstyle, despues de la lista de definicion de las propiedades
// ME ESTA DANDO EL VALOR por defecto que el Navegador le esta dando al enlace, a esa etiqueta
// a nivel CSS  */
// /*Como accedo a una sola propiedad en particular*/
 
// console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));
// /*Como Podemos establecer Valores? tenemos varias maneras*/

// $linkDOM.style.setProperty("text-decoration", "none")//el none quita el subrayado de la palabra DOM
// /*Podriamos tambien convertirla a un elemento de bloque para que ocupe todo el espacio a lo ancho*/
// $linkDOM.style.setProperty("display", "block");
// // $linkDOM.style.width = "50%";
// // $linkDOM.style.textAlign = "center"; //centra el texto DOM en ese 50%
// // $linkDOM.style.marginLeft = "auto"; 
// // $linkDOM.style.marginRight = "auto"; 
// // $linkDOM.style.padding = "1rem"; 
// // $linkDOM.style.borderRadius = ".5rem";
// // /*si queremos ver todas las propiedades que he empezado a mapear

// // console.log($linkDOM.style); volvemos a llamar el $linkDOM.style
// // en este ejemplo si llamamos nuevamente el Computed nos va  a mosttrar los margins
// // el lo mapea a nivel de pixeles porque es la unidad  que interpreta, y 1 rem
// // lo mapea como 16px */  

// // console.log($linkDOM.style);

// // /*HACE UN PAR TENEMOS ESTAS VARIABLES CSS - CUSTOM PROPERTIES
// // Vamos a crear unas variables CSS en la cabecera para no crear una hoja de estilo
// // es por practicidad. todas las variables hay que definirlas en root
// // Root: representa la etiqueta html pero con mayor peso especifico que la etiqueta html*/

// // /*Ya teniendolas declaradas como piuedo acceder a ellas? */
// // const $html = document.documentElement,
// // $body = document.body;

// // //estas variables no llevan $$ porque no hacen referencia al DOM
// // let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),

// //     varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// //     console.log(varDarkColor,varYellowColor); //en consola deberia mostrar #222 #F7DF1E

// //     //Ahora apliquemosle
// // $body.style.backgroundColor = varDarkColor;

// // $body.style.color = varYellowColor;
// // //como puedo modificar algunas de las variables? muy similar
// // $html.style.setProperty("--dark-color", "pink");//aun no pasa nada 

// // // ---------------- CLASE 6 dom Clases CSS ------------------------------

// /*Ya hemos visto como utilizar selectores, aplicar estilos y a obtener los atributos de una
// etiqueta html sin embargo en ningun momento hablamos de como acceder a las clases
// recordemosque cuadno empezamos a ver el manejo de los atributos, dijimos que la mayoria de los atributps
// html son de una palabra y accedemos a traves de la anotacion del punto. .lang .href . id . source etc
// debemos tener en cuenta que bajo esa misma perspetiva analizamos el atributo class sería algo como
// elemento.class y debemos tener en cuenta que la palabra class es una palabra reservada en los lenguajes
// que nos sirve cuando estamos programando en clases con orientacion a objetos.
// aqui si cambia un poco a la hora de acceder a la cadena de texto que tiene escrita
// el atributo class, atraves de una propiedad que se llama CLASSTHEM o accediendo a un objeto especial
// del navegador que se llama Dontokenlist donde es similar a un arreglo donde 
// en cada posicion nos va a  devolver cada una de las clases que tenga el elemento en cuestion.
// para este ejercicio vamos a aplicar estilos a estas tarjetas y nos vamos donde estamos aplicando estilos
// creamos una variable 
// */
// /* voy a traer la primera tarjeta que encuente en el arbol del documento */
// const $card= document.querySelector(".card");
// console.log($card);
// /* esto muestra <figure class="card"></figure>
// como puedo acceder al valor del atributo Class,
// recuerda que no podemos usar class porque es palabra reservada
// */
// console.log($card.classList); //devuelve un DOMTokenList que es similiar a un arreglo
// /*
// DOMTokenList ['card', value: 'card']
// 0:"card" ---> en la posición cero solo tienes una clase por eso la longitud es de uno
// length:1
// value:"card"   --->el valor o contenido textual lo tengo en el atributo value
// [[Prototype]]:DOMTokenList
// */

// console.log($card.className); //deuelve la cadena de texto que tiene el atributo class que en este caso es "card".

// /* Al ser las clases un poco mas compleja que los atributos para JS tenemos a traves de este
// classlist unos metodos que nos van ayudar, por ejemplo, a evaluar si un elemento tiene una
// clase en particular como lo es el class.list.contains que nos va a devolver
// un mensaje booleano en caso dado encuentra o no la clase que le indiquemos */
// console.log($card.classList.contains("rotate-45"));//aqui estoy preguntando si mi tarjeta numero uno tiene la clase rotate-45
// //entonces como podría agregarle esa clase?
// $card.classList.add("rotate-45");
// //y ahora volvamos a buscarla para ver si cambia el mensaje de false
// console.log($card.classList.contains("rotate-45"));
// //ya podemos ver como la primera tarjetita a empezado a girarse 45°, es mas si volvemos 
// // imprimir el className y el ClassList


// console.log($card.className);//vemos como dice en consola card rotate 45
// console.log($card.classList);// y vemos que el domtokenlist que genera classlist tiene Dos elementos
// /*
// DOMTokenList(2) ['card', 'rotate-45', value: 'card rotate-45']
// 0:"card"
// 1:"rotate-45"
// length:2
//  */

// //TAMBIEN PODEMOS QUITAR UNA CLASE
// $card.classList.remove("rotate-45");
// //si evaluamos nuevamente el contains debe devolver false
// console.log($card.classList.contains("rotate-45"));
// //Hay un metodo que funciona internamente como el ADD y el REMOVE 
// //Funciona como interruptor o palanca si el elemento tiene la clase se la quita y si no la tiene
// //se la agrega.. entonces para seguir con este ejemplo le quite clase a rotate-45con remove
// $card.classList.toggle("rotate-45");
// // evaluamos
// // console.log($card.classList.contains("rotate-45"));
// // $card.classList.toggle("rotate-45");

// // //entoces como haríamos para reemplazar una clase particular por otra
// // //en el ejemplo creamos dos clases una llamada rotate-45 y otra rotate-120
// // //ya mi tarjeta no tiene rotacion porque mi ultimo toggle se la quitó
// // //aplicamos nuevamente
// // $card.classList.toggle("rotate-45");

// // $card.classList.replace("rotate-45","rotate-120"); //(clase a reemplazar, clase nueva)
// // //Como agrego, quito o modifico mas clases, de uno en uno o todas a la vez se hace de la sgte manera
// // //separandolas por comas, de igual manera funciona remove
// // $card.classList.add("opacity-80","sepia");


// // $card.classList.remove("opacity-80","sepia");

// // $card.classList.toggle("opacity-80","sepia");

// // ---------------- CLASE 7 Dom Texto y HTML ------------------------------

// /* Como podemos interacturar con el contenido textual y el contenido html de un elemento como por ejemplo
// un selector o la etiquetadentro de nuestro archivo tenemos un <p> que dice id= y el parrafo, 
// lo que vamos hacer es capturar dentro de una variable la referencia de este elemento.
// voy a crear una variable que se va a llamar WhatIsDOM


// //--> vamos a insertar dinamicamente una defincion breve de lo que es DOM 
// // Como tiene un id lo capturamos por el elementogetbyId y anotamos su valor
//                                                                       */
// const $whatIsDOM = document.getElementById("loremipsum")

// let text = `
// <p>
// El modelo de Objetos del Documento(<b><i>DOM- Document Object Model</></b) es una API para 
// el documento HTML y XML.
// </p>
// <p>
// Este proveé una representación estructural del documento, permitiendo modificar su contenido y
// presentación visual mediante ccodigo JS.
// </p>
// <p>
// <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores</mark>
// </p>
// `;
// /*entonces como podemos modificar el contenido el selector (document.getElementById y reemplazarlo por este text?
// llamado innertext no es parte del standar, se creó para internet explorer y la pregunta sería porque
// tenemos dos propiedades que hacen lo mismo, textcontent e innertext?
// ambas sirven para agregar contenido textual a un elemento, innertext fue creada para internet explorer y
// textcontent es la propiedad standar, pero funcionan en cualquier navegador.veamos que es lo que hace
// innertext de ese parrafo.
// */

// // $whatIsDOM.innerText = text

// /*vemos como a sustituido el parrafo loremipsus, por esos 3 parrafos,  pero porque cuando revisamos en Elements 
// vemos que tiene <br> R/ como esta metido en un templatestring, entonces el templatestring esta mapeando
//  esas tabulaciones que tengo. otro dato importante es que innertext no esta reconociendo las etquetas HTML
//  las esta imprimiendo como si fuera texto. pero la propiedad standar es textContent*/

//  $whatIsDOM.textContent = text
//  /* parece lo mismo pero mientras que el innertext me respeto todas esas intentaciones que genero las templaesstring
//  vemos como "quitó" todas las tabulaciones pero aun tengo, pero textcontent no esta interpretando las etiquetas html
//  ahora si tu quieres que el contenido se renderice como codigo HTML utilizas la propiedad innerHTML, ella
//  lo que va hacer es reemplazar lo que tenga como contneido ese nodo y va a insertar contenido HTML
//  */
// $whatIsDOM.innerHTML = text;
// /* aqui si podemos ver como el texto cambió a la negrita a la letra italica y el marco y si miramos en elements
// buscamos a p id="loremepsum" vemos que tenemos esos 3 parrafos ahí.
// Surge una pregunta, cuando usar innertext y cuando usar textContent?
// por ejemplo imagina una aplicacion de Chat. donde si tu tratas de agregar una etiqeuta imag con una imagen
// que apunte a una url  que se encuentre en internet, seguramente eso te lo va a bloquear, porque seguramente
// todo el texto que introducimos en ese input, esta validado para que no se inyecte ningun tipo de codigo html
// como si hay otros que si permiten, un jemplo si mandamos un texto entre etqieutas bolt
// y se coloca en negrita quiere decir que lo esta soportando o le esta pegando dinamicamente a la interfaz donde se van mostrando los mensajes
// el contenido con innerhtml.
// entonces cuando necesites insertar solo texto usa textcontent, y cuando necesites solo codigo html utilizar innerhtml
// existe otra propiedad que se llama outer.html.
// sintacticamente nos damos cuenta que tenemos 3 parrafos dentro un parrafo
// semanticamente no esta bien, mas biene el parrafo deberia ser un div o un section, entonces para corregir este error
// debemos agregar una propiedad llamada outerHTML y ella lo que hace 
// es que mientras INNER : REEMPLAZA EL CONTENIDO HTML del elemento DOM
// Lo que outer reemplaza este elemento del DOM
// ($whatIsDOM) por lo que tengamos aca ->(text)

// es decir el parrafo id="loremipsum"que tenia a los otros 3 parrafos se va a eliminar
// donde antes estaba esa referencia se va a reemplazar por
// los 3 parrafos, vamos a tener esos parrafos de manera independiente
// */

// $whatIsDOM.outerHTML = text;

// /*visualmente parece lo mismo que no paso nada, pero revisamos elements y vemos que ya no tengo ese parrafo
//  id=(loremepsum)
//  solo tengo debajo de mi etiqueta h3 los 3 parrafos
//  <h3>
//  <p>
//  <p>
//  <p>
//  */




// // ---------------- CLASE 8 DOM Traversing: Recorriendo el DOM ------------------------------
// /* que es esto del DOM Traversing?
// es una serie de propiedades que nos da el API del DOM tomando como referencia un nodo poder 
// recorrer diferentes elementos, todo estos metodos son para los elementos.
// recuerda que en la introduccion del Dom hablamos de que hay diferentes tipos de nodos,
// de hecho vistamos una pagina de MOZILLA DEVELOPER NETWORK y miramos que hay 12 nodos diferentes.
// por ejemplo un nodo son los elementos de lo que hemos estado trabajando como las etiquetas HTML,
// Tenemos nodos de texto, comentarios, nodos de fragmentos etc
// este DOM TRAVESING lo vamos a ver con las propiedades que nos sirven para recorrer los elementos

// por ejemplo el salto de linea de una li a otra li es un tipo de nodo
// // */
// // const $card = document.querySelector(".cards");

// // console.log($cards);
 
// // console.log($cards.children);
// // console.log($cards.children[2]);
// // console.log($cards.parentElement);
// // console.log($cards.firstElementChild);
// // console.log($cards.lastElementChild);

// // console.log($cards.previousibling);//este va a mostrar un nodo text que es el salto de linea
// // console.log($cards.previousElementSibling);
// // console.log($cards.nextElementChild);
// // console.log($cards.closest("div")); //closest--> etiqueta div ancestra mas cercano

// // console.log($cards.closest("body")); //closest--> etiqueta body ancestra mas cercano

// // console.log($cards.children[3].closest("section")); //closest--> etiqueta div ancestra mas cercano


// // ---------------- CLASE 9 DOM CREANDO ELEMENTOS Y FRAGMENTOS ------------------------------
// /* 
// estamos viendo como manipuilar el API del Dom es la manera de como la manera de js podemos interacturar
// con HTML, Hoy veremos como crear un elemento en el Dom
// recordemos que un elemento JS es una etiqueta HTML
// Hasta el momento hemos aprendido a manipular las etiqeutas existentes 
// pero esta clase vamos aprdenr a crear nuestras propias etiquetas
// dinamicas.
// para ello del codigo html existente, vamos a utilizar la parte de las tarjetas y vamos a crear una nueva tarjeta
// de manera dinamica.

// /* creemos una etiquete figure y porque figure? porque vamos a crear un etiqueta HTML
// EL DOM tiene una propiedad que se llama createElement en este caso una figure, porque esas etqieutas 
// estan dentro de una etiqueta figure, 
// */

// const $figure = document.createElement("figure"),
// //adicional a esto cremaos unos elementos dinamicamente de tipo imag y figcaption ya que estan dentro de figure
//     $img = document.createElement("img"),
//     $figcaption = document.createElement("figcaption"),
// //esta etiqueta no tiene atributos pero si un nodo de texto, recuerda que tenemos 12 tipos de nodos
// //entonces para el nodo de la figcaption necesitamos crear otro elemento de tipo texto.
// //podemos hacerlo tbn con la propiedad text content pero veremos como se crean nodos de texto
      
//     $figcaptionText= document.createTextNode("Animals"),// asi como tenemos un createElement tenemos un create Node
// //la pagina de la que estamos sacando las imagenes tiene 5 categorias, pero voy a tomar otro nodo de texto de
// //  animals asi que el nodo de texto va a a decir Animals que es el texto que quiero que aparezca dentro del nodo de la fogcaption
// //y adicional a esto necesito capturar el nodo padre donde voy a capturar esa tarjeta
//     $cards = document.querySelector(".cards");
// /* aqui ya estan creadas dinamicamente estas tarjetas pero no estan incorporadas en el arbol del DOM
// para eso necesito ir agregandoselas. en este ejemplo al elemento padre cards le agrego un hijo (appendChild)
// y especificamos el nodo que queremos agregar, en este caso queremos agregar la etiqueta figure*/
//     $figure2= document.createElement("figure");   

//     $img.setAttribute("src", "https://placeimg.com/100/100/animals");
//     $img.setAttribute("alt", "Animals");
//     $figure.classList.add("card");

//     $figcaption.appendChild($figcaptionText);
//     $figure.appendChild($img);
//     $figure.appendChild($figcaption);

//     $cards.appendChild($figure);

//     $figure2.innerHTML = `
//     <img src= "https://placeimg.com/200/200/people" alt="People">
//     <figcaption>People</$figcaption>
//     `;
//     $figure2.classList.add("card");
//     $cards.appendChild($figure2);

// /*dinamicamente se crea una tarjeta en el codigo html de nuestro navegador en el inspector de elementos
// vemos que la etiqueta section y si se agregó la etiqueta $figure y luego con la linea appendChild la agregue
// pero vemos que esta figura esta vacia y es porque antes de agregar al nodo tarjetas la figura tengo que agregarles
// la figura y la figcaption, y a este figcaption debo agregarle el nodo de texto que acabo de crear*/

// /*entonces antes de agregar el metodo appendchild tendriamos que empezar a configurar dichos elementos
// 1. como lo es el nodo figura agregarle el nodo img y 
// 2. agregamos el nodo figcaption y vemos el navegador
// 3. guardamos y vemos el DOM y la etiqueta figura ya debe tener las etiquetas agregadas (im y figcaption),
//  pero al figcaption le hace falta el texto y a la img le hace falta el src y el atributo alt.
// entonces antes de agregar eso debo decir

// 1 a ficaption agrega el nodo appendchil ($figcaptiontext); para que imprima el nombre de animals.
// 2. y antes de eso habia que configurar la etiqueta img en sus atributos src y en este atributo toca llamar una 
// imagen de placeimag de la categorias animales y de igual manera se configura su atributo alt y al ya estar completo
// recordemos que hay que darle el estilo de tarjeta a la figura hayque agregarle la clase card por eso 
// vemos que la imagene se inserta en cualquier lado y rompe como esa maquetacion que teníamos, de 
// igual manera hay que decirle al nodo figure en su lista de clase le agregamos la clase card. y ahi vemos
// como se agregado una sexta tarjeta dinamicamente. aqui hemos creado un Nodo*/

// /* existe otra manera muy valida de crear etiquetas porque voy agrgar otra tarjeta
// y vamos a decirle create.Element necesito que me cree otra figura
// en lugar de volver a crear un nodo para la imagen para el figcaption y el textnode 
// de la imagen de la figure, ya tengo creada el elemento de la figura numero 2
// y lo que vamos a crear y a utilizar la propiedad innerhtml para agregarle elc
// contenido dinamicamente, la desventaja de hacerlo asi es que para JS este texto
// no va ser un nodo pero finalmente estamos generando contenido dinamico
// luegode haber creado figure2.innerHTML debemos que volver agregar la clase
// cards a la figura2 para que tome los estilos y agregar al nodo tarjetas la 
// figura nuemro 2, lo que hicimos con este paso fue ahorrarnos
// el paso de crear el Element img y el CreateTextNode figcaption y 
// si miramos ya tenemos una septima tarjeta creada esas dos ultimas han sido creadas dinamicamente

// que pasa si deseamos agregar varios elementos de un list de una ul dinamicamente?
// imaginemos que tenemos un arreglo y creamos dinamicante una etiqueta ul
// aqui vamos a poner document.write para poner un titulo*/

// const estaciones =["Primavera","Verano","Otoño","Invierno"],
// $ul = document.createElement("ul");
// document.write("<h3>Estaciones del Año</h3>");
// //a que elemento padre vamos a agregar esa ul? a body
// document.body.appendChild($ul);
// /*cree una variable li y accedemos a la propiedad textcontent.
// 2. le asignamos ese valor el cual esta recorriendo el foreach
// y le decimos que a la ul le agregue dicho elemento
// y vemos como dinamicamente genera mi lista de estaciones*/
// estaciones.forEach(el => {const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li);
// })
// /*en este ejercicio usamos la tecnica del textContent
// pero pudimos haber usado la tecnica del CreatTextNode y pudimos haber usado 
// la tecnica del inner.HTML que es muy comoda.
// ahora miremos otro ejemplo sobre continentes*/
// //creamos una segunda lista
// const continentes = ["África","America","Asia","Europa","Oceanía"],
// //creo una variable ul2 que va ser de tipo etiqueta ul
// $ul2 = document.createElement("ul")
// //coloquemos un titulo como en el ejemplo anterior
// document.write("<h3>Continentes del Mundo</h3>");
// //de nuevo al body vuelvo agregar esa ul2
// document.body.appendChild($ul2);
// /*si no quiero utlizar createElement y quieres hacerlo con inner.HTML
// aqui lo que hay q tener en cuenta es que por cada iteracion  vamos a estar 
// agregando nuevo contenido a la propiedad innerHTMl de esta lista2 
// entonces el detalle es que cuando vamos a recorrer con la tecnica Inner
// para llenar contenido dinamico de varios registros a la vez lo primero que
// debemos hacer es iniciliaciar con un valor nulo o una cadena vacia
// la propieda innerHTML del elemento en cuestion. */

// /*entonces la incializamos vacia para cuando la este agregando dinamicamente 
// con la ayuda del foreach lo q le voy a decir es que*/
// $ul2.innerHTML ="";
// //la propiedad innerHTML de esta etiqueta de este elemento ul2
// // continentes.forEach(el => $ul2.innerHTML = el);
// //  continentes.forEach((el) => ($ul2.innerHTML = `<li>${el}</li>`));
// /*--> si lo hacemos asi de estos dos modos solo esta planchando la ultima li de la etiqueta del ciclo
// solo puso oceanía. pero porque hace eso? porque le estoy diciendo al ciclo foreach que planche 
// el contenido de innerHTML. lo que tenemos que hacer es concatenar lo que ya tiene mas esto.
// entonces en vez de decirle = a, le decimos +=

// */

// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// /* Esto esta bien pero lo que pasa es que cuando sean cientos o muchos mas que cuatro o cinco
// le pegamos mucho al DOM con cada iteracion y eso hace que nuestro rendimiento sea menor en nuestra pagina
// lo que podemos hacer es crear un fragmento dnamicos, muy similar a una variable que se crea
// dinamicamnete y a ese fragmento le iteramos y le hacemos las iteraciones al fragmento y no al DOM
// Y una vez tengamos todos los elementos creados en ese fragmento entonces nada mas hacemos
// una sola insercion al dom Con los n registros que nuestra peticion haya capturado mejorando el rendimiento
// iamgina donde tengas un catalogo de 1000 productos con estas tecnicas serían 1000 inserciones al DOm
// mientras con la tecnica de fragmentacion sería una sola, veamos este ejemplo con los meses del año*/

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
// ]
// $ul3 = document.createElement("ul"),
// $fragment = document.createDocumentFragment();
// meses.forEach(el =>{
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
// });
//     document.write("<h3>Meses del Año</h3>");
//     $ul3.appendChild($fragment);
//     document.body.appendChild($ul3);

 //por cada vuelta crea nuestro document.createElement de tipo li y 
//  vamos agregarle la propiedad textContent a esta li le agregamos el mes o el elemento en cuestion.
//lo que haciamos antes agregar el appendChild a la lista
//aqui lo que hacemos es agregarle a ese nodo fragmento un appenChild
//aqui estoy haciendo el appenchild de la lista al fragmento, 
// y cuando acabo de recorrer todo el foreach  aquien vamos agregarle ese fragmento es la (li)
// ponemos el write Meses del año, y le decimos a la ul3 le agregamos como hijo el fragmento.
//y nos faltaría decirle al body vamos agregarle la lista nuemro 3, 
// y asi con eso es una sola insercion al DOM
//aqui no se puede crear con tecnicas de innerHTML sino con tecnicas de Nodos, es la mas correcta



// ---------------- CLASE 10 Templates HTML ------------------------------
 /* como su etiqueta lo dice, es un mdelo a seguir, en el cual tu estructuras
 el contenido html que mediante JS se convierta en dinamico y ps tbn poder interacturar con el DOM
 En esta clase vemos en combinacion con los fragmentos del DOM a utilizar la ertiqueta 
 template
 
 vamos a ir al dcumento html
 debemos saber que la etiqueta templates no se visualiza en la pantala de element, con este template
 que es lo que vamos a generar dinamicamente las figuras con la clase cards
 lo que yo tengo que hacer es dentro del template es poner el codigo html que necesito
pongo una etiqueta class="card" con la clase card y luego una etiqueta img ella aqui podria ir vacia 
y los atributos podria modificarlos despues y finalmente la etiqueta figcaption vacia
la idea es llenarla dinamicamente y le doy un nombre a la etiqueta template
*/
//creo una variable donde voy a ir almacenando nuevas tarjetas al selector cards

// const $cards = document.querySelector(".cards"),
// $template = document.getElementById("template-card").content,
// $fragment = document.createDocumentFragment(),
// //creo una variable que apunte al template y es importante apuntar al
// // contenido y no a la tarjeta que es lo que me interesa
// //creamos el fragmento para no pegarle al Dom cada vez que se agregue una tarjeta
// //creamos una variable q se llame cardContent, aqui lo que vamos hacer es agregar
// //una tarjeta por cada una de las categorias de este sitio.
// //con la diferencia que los titulos estan en español.
// //y estoy mandando a llamar una imagen de cada una de ellas
// //es una arreglo y cada tarjeta es un objeto con sus propiedades
// cardContent = [
// {
//     title: "Tecnología",
//     img: "https://placeimg.com/200/200/tech",
// },
// {
//     title: "Animales",
//     img: "https://placeimg.com/200/200/animals",
// },
// {
//     title: "Arquitectura",
//     img: "https://placeimg.com/200/200/arch",
// },
// {
//     title: "Gente",
//     img: "https://placeimg.com/200/200/people",
// },
// {
//     title: "Naturaleza",
//     img: "https://placeimg.com/200/200/nature",
// }

// ]
// //por cada elemente que traiga cardcontent
// //aqui dentro del forEach era que generabamos con inner o creabamos la figcaption
// // o la imagen, las li y se los agregabamos al fragment
// //pero en este caso toda esa estructura ya la tenemos en la etiqueta template
// //entonces lo unico que tengo q hacer. es tomar como referencia la variable 
// // etiqueta template, que es la que tiene el contenido de la etiqueta HTML
// //y voy navengando por su estructura del DOM
// cardContent.forEach((el) => {
// //dentro del tempatle encuenta una imagen y a esa iamgen vamos a establecer
// //en su atributo src (source) el valor de el.img, porque es ahi donde
// //queremos la imagen de la informacion que viene en estos objetos
// // en la variable cardContent
//     $template.querySelector("img").setAttribute("src",el.img);
//     $template.querySelector("img").setAttribute("alt",el.title);
//     //buscame en template una etiqueta figcaption y en la propiedad textContent de esa figcaption
//     // ponme el titulo de la tarjeta
//     $template.querySelector("figcaption").textContent=el.title;
// //aqui varia un poco, ese template es unico entonces si yo utilizo ese
// //  template para primera tarjeta ya no estaría disponible para la segunda.
// //y que debemos hacer? clonar dicho nodo, clono la estructura
// //como puedo clonar todo el nodo? un metodo en particular que ofrece el dom document.importNode
// //le digo cual es la variable referencia de la cual voya  generar para hacer el clon o templeate
// //ese true significa que va a copiar todo la estructura interna.
// //si le pasamos un false nad mas copoia la etiqeuta templeate de apertura y cierre
//     let $clone = document.importNode($template, true);
//     $fragment.appendChild($clone);
// // decimos que a ese fragmento le agreguemos ese clon
// //cuando terminemos el foreach al elemento card vamos agregarle el fragmento
// //asi hacemos una sola insercion al dom
// });
// $cards.appendChild($fragment);


// -------- 11. Modificando Elementos (Old Style)-----------------------
/* Hasta el momento solo hemos visto un metodo que nos sirve para 
// agregar elementos de manera dinamica (AppendChild) el cual agrega el elemento 
// al final del selector obejtivo, El dia de hoy tenemos otros metodos
// que nos permite reemplazar o insertar al inicio o al insertarlo en una posicion particular
// para esto vamos hacer el uso del DOM TRAVERSING para pdoer tener esa interaccion.
// en este momento vamos a ver los metodos de antaño.
// vamos a ver el codigo de las tarjetas.

// vamos a crear una variable card y qu ehaga referecnai a nuestro selector
// de las tarjetas */
// const $cards= document.querySelector(".cards"),
// /*creamos una nueva tarjeta, vamos a utilizar la forma menos recomendada
// no vamos a crear el elemento delfigcaption ni la img ni templates
// esto es para agilizar la enseñanza y el video
// lo importate es entender los otros metodos para agregar a parte de 
// appendChild lso elementos dinamicos  */
// $newCard = document.createElement("figure")
// //agregar el contenido de esta tarjeta. categoria any cualquiera arroja cualquier imagen 
// $newCard.innerHTML = `
// <img src ="https://placeimg.com/200/200/any" alt="Any">
// <figcaption>Any</figcaption>
// `;
// //para que esa etiqueta figure tenga la clase card, la agregamos
// // a newcard la clase card
// $newCard.classList.add("card")
// //que pasa si yo quiero reemplazar un elemento o un nodo?
// //si queremos reemplazar la tarjeta Arch y analizamos en la pagina 
// //arch es el tercer hijo

// // $cards.replaceChild($newCard, $cards.children[3]);
// //como insertamos antes de un nodo que tomemos como referencia
// // como insertamos la imagen de primero en la posicion 0

// $cards.insertBefore($newCard, $cards.firstElementChild);
// //insert necesita dos elementos
//el nuevo nodo que es newcard y el nodo de referencia
//a diferencia de replace no lo va a reemplazar va a tomar como referencia
//ese nodo hijo y va a insertar el nodo antes que ese.

/* tenemos un metodo para eliminar */
// $cards.removeChild($cards.lastElementChild);


// -------- 12. Modificando Elementos (Cool Style)-----------------------
/* En la sesion anterior vimos que metodos tenemos distinto para insertar
elementos que no sean al final, sino reemplazar, quitar, antes de.
sin embargo con los años han aparecido nuevos metodos que nos facilitan un poco
el trabajo para pder insertar en el lugar que nostros querramos,
para ellos existen 3 metodos los cuales son:
>inseta de manera adjacente<
-> .insertAdjacentElement(position, el) -> similiar appendChild 
-> .insertAdjacentHTML(psoition,HTML)  -> similiar innerHTML agrerga contenido
-> .insertAdjacenText(position,text) -> similiar textContent 
  
  "Posiciones"
//   (begin)
//     -> beforebegin(hermano anterior)  
//     -> afterbegin(primer elemento hijo)  
//   (after)
//   -> beforeend(ultimo hijo)
//   -> afterend(hermano siguiente)  
  
//   vamos a copiar unas variables que teniamos del ejemplo anterior
//   */  

// const $cards= document.querySelector(".cards"),
// $newCard = document.createElement("figure");

// // $newCard.innerHTML = `
// // <img src ="https://placeimg.com/200/200/any" alt="Any">
// // <figcaption>Any</figcaption>
// // `;
// $newCard.classList.add("card");
// //voy a tomar como nodo de referencia tarjetas y lo voy a insertar
// // como hermano anterior vemos como se insertó antes 
// //si nuestra referencia es la section el hermano anterior es el enlace

// // $cards.insertAdjacentElement("beforebegin", $newCard);

// $cards.insertAdjacentElement("afterbegin", $newCard);
// //aqui la tarjeta any ya se encuentra como primer hijo

// // $cards.insertAdjacentElement("beforeend", $newCard);
// //se agrega como ultimo hijo

// // $cards.insertAdjacentElement("afterend", $newCard);
// //se agrega com hermano posterior

// //para el siguiente en vez de usar el INNER.HTML lo que vamos a usar este
// // contenido que va a representar el contenido HTML de la figura
// //la voamos a crear en una nueva variable ya no como new card sino como 
// // una variable let, y la figcaption la vamos a poner vacia 
// // para posterior explicar el adjacent text

// let $contentCard = `
// <img src ="https://placeimg.com/200/200/any" alt="Any">
// <figcaption></figcaption>
// `;
// /*vemos que la etiqueta en Element si existe, pero la figura esta vacía
// porque nada mas tiene la etiqueta figure con la clase card.
// entonces necesitamos insertarle el contenido HTML
// Decimos: a la nueva tarjeta le insertamos contenido html de manera ADJACENT
// es independiente si esta after o before, el elemento esta vacio y lo necesito como hijo*/

// $newCard.insertAdjacentHTML("beforeend",$contentCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
// //tomo como referencia la nueva tarjeta para no crear una nuevavariable
// //yo se que la nuevatarjeta tiene su contenido html que es este(<img src ="https://placeimg.com/200/200/any" alt="Any"><figcaption></figcaption>) */}
// //entonces puedo recorrer el Dom que tiene internamente y buscar el selector que coincida con la etiqueta figcaption
// // y partir de ahi, le digo en ese figcaption insertame texto adjacentemente
// //como la figcaption esta vacia da lo mismo si es afterbegin o beforeend.
// //y le ponemos el texrto que era ANY
// $cards.insertAdjacentElement("afterbegin",$newCard);
// //ya la imagen esta cargada pero la etiqueta figcaption aun esta vacía
// //aqui voy hacer uso de insertext.
// //pero lo hacemos antes de que inserte la tarjeta a section de cards
// //vamos a la linea 763


// --------------------------- 13. Manejadores de Eventos-----------------------

/* una de las razones por las cuales js se creó fue por la interaccion por alla por la epoca de los 90
EVENTOS: son los mecanismos que tenemos en javascript para poder controlar las acciones
del usuario y definir ciertos comportamientos del docuemtno que sucedan en cierto momento
o cuadno se cumplan algunas condiciones. las funciones que se ejecutan en un evento
es lo que se conoce como EVENT HANDLER o los manejadores de eventos, u observadores o escuchadores
en este clase vamos aprender las varias maneras de definir los eventos en javascript
de igual manera puedes ir la pagina devmozilla event y vamos a llegar a ver la lista de todos los eventos
existentes, es imposible ver todos los eventos pero veremos los mas importantes
vamos a seguir agregando codigo html y debajo de la etiqueta template vamos a poner un titulo h3 
eventos en javascript - 
tema - manejadores de eventos - para eso empezamos a crear un par de botones
y un click y vamos a ver como podemos ir desencadenando un evento.
la primera es teniendo un evento como si fuera un atributo de html
es decir evento con atributo con la etiqueta html, No es la forma mas recomendada
asi como aplicar atributos con la etiqeuta style asi esta mal visto aplicar eventos com si fuera atributos
--> para que un evento funcione a manera de atributo lo unico que hay que hacer es invocarlo
de manera semantica con la palabra (on) y de ahi el evento que quieras trabajar como el onclick,
puede ser un saludo o una funcion que tengamos definida en js
esta funcion es la que se va a aconvertir en nuestro manejador de evento.
cuando una funcion se convierte en un manejador de eventos, nosotros podemos acceder a un
objeto especial que es el evento en si, y eso lo hacemos con la palabra reservada
// event.
// */

// function holaMundo(){
//     alert("Hola Mundo");
//     console.log(e);
// }
// //vamos a crear una variable que apunte a ese boton
// //si yo quiero ejecutar esta funcion como manejador semantico es de la siguiente manera
// //formula: elemento-hacer-asignadoel-evento ->punto<- el-nombre-del-evento (on)es-la-parte-semantica-click (accion)
// //esto va ser igual a la funcion que quiero ejecutar pero sin parentesis, porque despues se ejecuta el evento
// //y me manda undifined porque el evento que mandé a la consola no esta definido
// const $eventoSemantico = document.getElementById("evento-semantico");

// $eventoSemantico.onclick = holaMundo;
// /* ves como una misma funcion te puede servir para desencadenar eventos en diferentes elementos.
// tienen un pequeño incoveniente estos eventos semanticos. recuerda la clase de prototipos donde deciamos que js es 
// un lenguaje basado en protype y hablamos de la funcion constructora y que si yo queria agregar mas metodos a
// esa clase tenia que agregarlo a su prototipo.
// comentamos esto porque es muy similiar lo que hace ONCLICK es como agregarle un metodo al prototipo
// del modelo de eventos del dom que estamos trabajando. va a ver momentos en lo que un mismo elemento HTML tengamos que asignarle diferentes manejadores de eventos
// o funciones que hagan diferentes cosas. entonces la limitante de tipo semantico es que una vez definido le evento solo puedes ejecutar 
// solo mas que una funcion.tbn una funcion de tipo semantico podemos declarar los manejadores de enventos
// es definirlo con una arrow fuction o una funcion anonima. en la linea 814 le he asignado al evento Onclick
// a este elemento la funcion holaMundo y en la linea 836 le estoy asignando una funcion que voy a hacer. aqui vemos 
// las limitantes que tienen los manejadores semanticos, es que por cada evento solo puedes asignarle una sola funcion
// */
// $eventoSemantico.onclick = function(e){
// alert("Hola mundo manejador de eventos semantico");
// };
// /* el valor onclick comienza con el valor holaMundo pero luego se actualiza con una nueva funcion 
// IMPORTANTE: toda funcion que se convierte en un manejador de evento que se ejecuta en algun momento, 
// NO PUEDE RECIBIR PARAMETROS, el unico parametro que recibe es el EVENTO en si.
// Podemos obtener con la palabra reservada event, en algunos blog, documentos o quias otros codigos podemos ver que algunos
// desarrolladores han simplificado la palabra (event por e) si yo mando esa e a consola, 
// esa va a representar el evento o tbn es valida pasarle la palabra event

// */
// // console.log(event);
// console.log(e);
// /* que pasaría si tienes la necesidad de pasar varias funciones
// a un mismo elemento?
// para eso tenemos algo llamado LOS MANEJADORES MÚLTIPLES
// Ahi es dodne vamos a utilizar un metodo que se llama 
// addeventlistener que es un metodo que nos permite levantar un escuchador o un manejado
// creamos una variable muy similiar a la pasada* 
// --> que buscamos es que el evento multiple es ejecutar varias funciones
// que se hayan definido en diferentes manjeador la mismo evento.
// ya vimos que en el evento-semantico el evento se reemplazo la funcion 
// holaMundo por la funcion anonima.
//  */
// const $eventoMultiple= document.getElementById("evento-multiple");
// /* entonces como declaramos un manejador de eventos multiples? 

// 1. primero se toma el objeto que le vamos a cambiar el evento
// 2. asignamos el metodo addeventlistener.
// 3. este metodo puede recibir muchos parametros pero esta clase vamos
// hacer los dos mas importantes. 
// 1.(tipo de evento .type ) y 2. (el objeto que lo origina . target)
// 4. (lo primero es el nombre del evento)
// y si nos damos cuenta ya no aparece la palabra semantica ON, solo dice click
// 5, coma (,) "listener -  escuchador: es la funcion que se va a ejecutar" 
// Importante: invocar la funcion que ya esta previamente declarada
// sin colocar los parentesis a la funcion*/

// $eventoMultiple.addEventListener("click", holaMundo);

// /* ahora lo hacemos a manera de arrowfuction */
// $eventoMultiple.addEventListener("click", (e)=>{
//   alert("Manejador de eventos multiples");
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
// });

// /* cuando utilizamos los manejadores semanticos el codigo de la funcion anonima
// reemplaza el valor de la funcion holaMundo, esa es la gran ventaja con el metodo
// addeventlistener que yo les puedo asignar varias funciones a un mismo elemento
// para un mismo evento


// recapitulando tenemos entonces:
// estas son las 3 formas que tenemos para trabajar con los eventos.
// 1. como atributo del html que no es lo mas optimo (<button onclick="holaMundo()">Evento con atributos HTML</button>)
// 2. eventos semanticos que solo podemos asignar una sola funcion
// 3 y los manejadores multiples utilizando los addeventlistener del estandar del DOM
// */

// --------------------------- 14. Eventos con Parametros y REMOVER Eventos-----------------------
/*

en la clase pasada deciamos una funcion que se ejecute en un evento se conoce como el eventhandler
y deciamos que cualquier funcion que se ejecute en un evento solo puede recibir como parametros
ese mismo evento en si o podemos acceder nativamente con la palabra event, pero solo puede recibir ese
parametro tu no le puedes pasar mas parametros a una funcion manejadora e event.
que pasa cuando necesitamos pasarle parametros a la funcion navegadora de eventos,
o una funcion se ejecute en un evento pasarle parametros porque necesitas trabajar esos parametros.
eso se puede hacer. aunque que pareciera que podemos engañar al navegador
*/


// function holaMundo(){
//     alert("Hola Mundo");
// }

// function saludar(nombre = "Desconocid@"){
// alert(`Hola ${nombre} como estas?..`);

// }
// const $eventoSemantico = document.getElementById("evento-semantico"),
// $eventoMultiple= document.getElementById("evento-multiple"),
// $eventoRemover= document.getElementById("evento-remover");


// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function(e){
//   alert("Hola mundo manejador de eventos semantico");

// };
// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e)=> {
//   alert("Hola mundo manejador de eventos Multiple");
// console.log(e);
// console.log(e.type)
// console.log(e.target);

// });
// // $eventoMultiple.addEventListener("click", saludar); --> este ejemplo es el arroja el object 
// $eventoMultiple.addEventListener("click", ()=>{
// saludar();
// saludar("Gabriel");

// });
// /*
// vamos a seguir manejando este navegador multiple, vamos a crear una funcion que se 
// llame Saludar y esta funcion recibe como parametros el nombre de la persona que vamos a saludar, sino 
// me pasa parametros que diga hola desconocida y adentro le pasamos un alert en consola nos muestra el mensaje de hola [object MouseEvent]
// vemos que aunque esta funcion tiene un valor por defecto para el parametro
// No esta imprimiendo hola desconocid@ esta imprimiendo el [ObjectMouseEvent]
// siempre mandamos los objetos a la consola porque cuando los queremos convertir a cadena de texto
// suele pasar esto. pero si a la funcion saludar le pasamos ademas el evento dentro del alert
// alert(`Hola${nombre} como estas?..`);
// va a imprimir dos veces  hola [object MouseEvent]  [object MouseEvent] 
// con esto comprobamos que toda funcion que vaya ser manejadora de enventos no puede
// recibir otro parametro que no sea el evento en si, aunque la funcion saludar tenga asignado
// el parametro nombre ni siquiera esta considerando el valor por defecto pero entonces que pasa
// si necesitamos ejecutar esa funcion con sus parametros desde una funcion manejadora cuando se de el click?
// la solucion son las Arrowfuction, era crear una funcion anonima sea la manejadora de eventos
// y directamente aqui ejecutar la funcion saludar, entonces como la funcion saludar deja de ser
// la manejadora y ahora lo es la arrowfunction ella debe ir con los parentesis.
// entonces la funcion no se va a ejecutar cuando recargue el navegador sino cuando le de click
// porque la funcion manejadora es la arrowfunction, y entonces si yo no le paso parametros
// abrimos la arrowfunction y ahora puedo ejecutar las veces que quiera la funcion saludar,
// vmaos a jecutarlo, para que nos mande el hola desconocido y el hola gabriel.
// entonces ese es lo que debemos hacer cuando necesitamos pasarle parametros a la funcion navegadora de eventos,
// envolvemos a la funcion en una arrow function y ya la podemos pasar parametros porque quien va  a estar manejando 
// el evento es la arrow function.
// tambien podemos eliminar eventos de un elemento para ello creamos aqui
// otro boton, nos vamos al Dom Y Creamos un boton similar y le pones eventoremover,
// esto solo podemos hacerlo con manejadores multiples. asi como tenemos una funcion
// que se llama addeventlistener asi tenemos una que se llama removereventlistener
// primero asociemos un listener.
// cuando yo quiera remover los eventos nos va a pedir el evento que queremos y la funcion asociada
// a ese evento. etonces fijemonos que si trabajamos el manejador como una arrowfunction 
// no va a funcionar porque es una funcion anonima. porque la caracteristica de una funcion 
// anonima en los eventos es que el momento en que se esta declarando se esta ejecutando
// despues se pierde la referencia.
// entonces para remover un manejador de eventos es decir una funcion asociada a un evento
// esta debe estar guardada en una funcion ya sea expresada o declarada

// para ejecutar este boton es con el doble click
// se ejecuta cuantas veces yo quiera, porque aqui a la hora de lo que lo jecute el addeventlistener
// aqui dentro de la programacion yo podria removerlo
// entonces aqui podria decirle a mismo evento remover el eventoremoverlistener
// y necesita dos aprametros el que voy a cancelar y luego la funcion manejadora, que en este caso
// seria esta misma funcion por eso aqui no va a funcionar y va a marcar error porque necesita
// forzozamente dos argumentos y solo estamos pasando uno, no puede ser arrowfunction o funcion anonima
// debe estar guardada.

// */

// // $eventoRemover.addEventListener("dblclick", (e)=>{
// //   alert(`removiendo el evento de tipo ${e.type}`);
// // console.log(e);
// // $eventoRemover.removeEventListener("dblclick"); //Uncaught TypeError:Failedtoexecute'removeEventListener'on'EventTarget':2arguments required, but only 1 present.
// // });

// /* entonces usemos una fucnion expresada */

// const removerDobleClick = (e) =>{
//       alert(`removiendo el evento de tipo ${e.type}`);
// //   console.log(e);
// //   $eventoRemover.removeEventListener("dblclick", removerDobleClick); 
// //   // $eventoRemover.disabled = true;
// // };

// // $eventoRemover.addEventListener("dblclick", removerDobleClick);
// // /* ahora vemos en le navegador que en el momento en el que ejecute el boton doble click
// se va a  ejecutar (removiendo el evento de tipo dblclick) y ahora va a ser el remover
// y si yo vuelvo a presionar el boton con doble click ya se deshabilito el evento, ya lo removí
// si queremos hacerlo mas visible al boton le aplicamos la propiedad
// disabled = true */

// //-------------------<DOM 15. Flujo de Eventos (Burbuja y Captura) >---------------------------------
/* Que es le flujo de los eventos? como es que JS interpreta los eventos
addeventlistener que hemos estado trabajando y el tiene un tercer parametro el que amos a ver el dia de hoy
entonces al html necesitamos agregar uns <h4>
vamos a crear una etiqueta section con la clase eventos-flujo con varios div para ver unso ejemplos
y vamos a necesitar un poquito css y aplicamos a las div que estan el selector eventos flujos
un paddign de 4rem, font-size: 2rem,, textalign: center  y luego a cada una de las div (1,2,3)
Les vamos agregar un color diferente

En el FLUJO DE EVENTOS tenemos dos maneras de ver como se va propagando el evento.
una vez que un evento se origina tiene una propagacion a lo largo del arbol de DOM
por defecto esa propagacion se va dando del elemento mas interno al mas externo
y esa fase se llama FASE DE BURBUJA porque del evento mas interno se propaga hasta el evento padre superiro que es windows
por defecto ese es el esquema que los navegadores soportan, de hecho no hay que hacerles
nada a nuestros manejadores multiples como el addeventlistener para que esto funcione esta 
fase de captura. veamos con unos cuantos mensajes a la consola como funciona
vamos a crear una variable que me capture esos 3 div que estan en la section
en clases anteriores aprendimos a desencadenar eventos a solo un elemento
asignando enventos de manera individual a cada de uno de los botones.
entonces imaginemos que muchos botones se forman de un boton de un catalogo que tengamos
en la base de datos, entonces tenemos que ir a consultar esa base de datos, tenemos que imprimir un boton por cada
un boton por cada registro que venga de la base de datos y a ese boton asignarle dinamicamente 
un evento, entonces para eso tocaria asignarle dinamicamente el evento a todos los elementos
entonces para esto me voy ayudar del metodo foreach que tienen los nodelist
para asignar el list de manera dinamica y no estar creando una dvlist para cada una de las div
ahora son 3 pero si fueran 1000 no seria funcional

*/
// const $divsEventos = document.querySelectorAll(".eventos-flujo div");

// function flujoEventos(e){
//   console.log(`HOLA`);
// }
// console.log($divsEventos);

// $divsEventos.forEach(div => {
//   div.addEventListener("click", flujoEventos);
// })
/* Mandamos a consola y le damos click a los recuadros y que es lo que esta pasando
que esta imprimiendo.?
aunque aparentemente le di click a cada una de las div ejemplo 3.
internamente 3 esta dentro de 2 y 2 a su ves dentro de 1 y como las 3 tienen asignado ese evento click
ahi vemos la propagacion del evento por eso vemos un console log de 3
cuando doy click en 2 la propagacion es 2 y 1  */

// const $divsEventos = document.querySelectorAll(".eventos-flujo div");

// function flujoEventos(e){
//   console.log(`HOLA TE SALUDA ${this.className}, el click lo originó ${e.target.className}`);
// }
// console.log($divsEventos);

// $divsEventos.forEach(div => {
//   div.addEventListener("click", flujoEventos);
// })
/* esta es la fase de burbujas porque vemos que vamos del elemento mas interno hacia el 
mas externo

La funcion ADDEVENTLISTENER tiene un tercer parametro opcional es una serie de opciones
cuando ponemos false decimos que estamos en fase de burbuja del mas interno al mas externo
pero si quisiera ir al contrario o FASE DE CAPTURA del elemento mas externo al interno. 
ya que es como pensar que estas capturando toda esa burbuja de los eventos, ahora vemos
como esos mensajes en consola se van a invertir.*/

// const $divsEventos = document.querySelectorAll(".eventos-flujo div");

// function flujoEventos(e){
//   console.log(`HOLA TE SALUDA ${this.className}, el click lo originó ${e.target.className}`);
// }
// console.log($divsEventos);

// $divsEventos.forEach(div => {
//   // div.addEventListener("click", flujoEventos, false );// o sin especificar o especificando con fase de burbuja
//   div.addEventListener("click", flujoEventos, true );
// /* tbn podemos a este tercer parametro podemos especificar cosas adicionales como x ejemplo
// pero tbn puedes pasar un objeto
//  */
// });

// const $divsEventos = document.querySelectorAll(".eventos-flujo div");

// function flujoEventos(e){
//   console.log(`HOLA TE SALUDA ${this.className}, el click lo originó ${e.target.className}`);
// }
// console.log($divsEventos);

// $divsEventos.forEach(div => {
//   // div.addEventListener("click", flujoEventos, false );// o sin especificar o especificando con fase de burbuja
//   div.addEventListener("click", flujoEventos, true );
// /* tbn podemos a este tercer parametro podemos especificar cosas adicionales como x ejemplo
// pero tbn puedes pasar un objeto
// //  */
// // // });

// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
// $linkEventos = document.querySelector(".eventos-flujo a");

// function flujoEventos(e){
//   console.log(`HOLA TE SALUDA ${this.className}, el click lo originó ${e.target.className}`);
// }
// console.log($divsEventos);

// $divsEventos.forEach(div => {
//     div.addEventListener("click", flujoEventos, {
//       // capture: false //activa el comportamiento burbuja
//       capture: true, //activa el comportamiento captura
//       /*que pasa si no queremos generar tanto codigo y queremos que nuestro codigo
//       se genere una sola vez */
//       once: true //si lo activo a true mi evento se ejecuta una sola vez
//     });

// });
// //---------------------------16. DOM stopPropagation & preventDefault --------------

/*en la clase de hoy vamos a ver como detener esa propagacion porque van a ver veces 
donde requiramos que nuestro evento no se progague hacia los elementos hijos o padres
(burbuja o captura) y entonces solamente se ejecute una sola vez la programacion de 
funcion manejadora.y tbn van a ver veces donde hay ciertos elementos del domm que tienen
comportamientos ya por default por ejemplo el boton submit


*/

// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
// $linkEventos =  document.querySelector(".eventos-flujo a");//traeme el primer enlace


// function flujoEventos(e){
//   console.log(`HOLA TE SALUDA ${this.className}, el click lo originó ${e.target.className}`
//   );
//   e.stopPropagation();
// }
// console.log($divsEventos);

// $divsEventos.forEach((div) => {
//     div.addEventListener("click", flujoEventos); //fase burbuja, true para fase de captura
   

// });

// $linkEventos.addEventListener("click", e => {
//   alert("Hola soy tu amigo y docente digital");
//   e.preventDefault(); //cancela la acción que tenga por defecto el elemento. la accion por default es abrir un enlace
// });

//-----------------17. DOM DELEGACIÓN DE EVENTOS -----------------------------------
/* ¿Qué es delegación de eventos? Delegación de eventos es un mecanismo a través del 
cual evitamos asignar event listeners a múltiples nodos específicos del DOM, 
asignando un event listener a solo un nodo padre que contiene el resto de estos 
nodos.
recordemos que en el ejercicio anterior estuvimos asignando de manera dinamica
a los 3 div el evento click, pero imaginemos que en vez de 3 tenemos 1000
pues no es optimo estar asignando el listener a cada uno de esos elementos,
tampoco hacerlo con un ciclo for o un foreach no va ser optimo para el rendimiento 
del navegador, cuando en realidad podriamos tener el evento asignado
a un elemento padre superior y a partir de ahi buscar el selector que coincida 
para ver quien es el que originó el evento desencadenarla la programacion que quiera
al momento del evento. entonces imagense en un formulario que tenga 30 inputs
y cada una tenga validaciones en lugar ed trabajar el evento "change, focus o blur" 
de cada elemento, se lo hacemos al formulario como tal, es mas podriamos asignarselo al nodo raiz
que en este caso es el document. 
la idea es generar un listener Global para el document si tengo que activar (click, submit
blur focus) todos los eventos asignados los pongo ahi, y apartir de ahi detecto cual 
es el selector del nodo que me interesa que active el evento y desencadeno
la programacion, de tal manera que en lugar de tener 20, 30 o mil listener 
generados al evento click, genero un solo listener generado al document.
uno de los detalles importantes de esta delegacion de eventos es que se evita
la propagacion entonces ya no tendriamos que detener de la propagacion porque
el evento esta asignado al nodo superior que es document ya no necesitariamos ese trabajo
y lo comprobamos con el siguiente ejemplo:
para esto necesitamos la función donde estamos asignando el evento.
ya no necesito los listener: div.addEventListener("click", flujoEventos);
tambien quitamos el console.log($divsEventos);
*/


// function flujoEventos(e){
//     console.log(`HOLA TE SALUDA ${this}, el click lo originó 
//     ${e.target.className}`);
  // }
  /*--> 1. el evento click del Listener lo voy asociar a todo el documento
  lo desencadeno en una ArrowFunction, si omito los caption estoy en fase de burbuja
  mandamos a consola el evento que origina el evento.
  que hace esto? cualquier parte donde haga click dentro del dom
  me dirá donde se hizo el click. 
  comentando todo el resto del codigo y solo dejo esto aqui esta toda la clase*/
  
  // document.addEventListener("click", (e)=>{
  // console.log("Click en", e.target);

  // if(e.target.matches(".eventos-flujo div")){
  //   flujoEventos(e);
  // }

  // if(e.target.matches(".eventos-flujo a"))
  //   {
  //     alert("Hola soy tu amigo y docente digital");
  //      e.preventDefault(); 
  //   };
  // });  
  
  /* para desencadenar esta funcion de mi evento de mi enlace d jonmircha.com
  lo que vamos hacer es buscar la coincidencia en el documento de algun selector
  en un condicional y dentro de el ejecutamos codigo que necesitemos para cada elemento
  del Dom que le vayamos asignar el evento click.  para eliminar el listener que 
  tenemos aca del link de mi sitio vamos a decirle  
  si.(objeto que originó el evento.matches(busca un selector valido) cual es?
  la que tiene $linkeventos ->el enlace que esta dentro de la clase .eventos-flujo)
  el metodo matches va a validar a true cuando presione este selector, entonces 
  como valida a true lo metemos dentro de un condicional lo que quiero que se ejecute
  en este caso es el alert: hola soy tu amigo y dg y el primer preventdefault*/

  // if(e.target.matches(".eventos-flujo a"))
  //   {
  //     alert("Hola soy tu amigo y docente digital");
  //      e.preventDefault(); 
  //   };
  // });  
  
  /* para el stoppropagation, como el document es el que tiene asignado el click 
  siendo el nodo nuestro nodo raiz, pues ya no hay un elemento padre por encima de el
  por eso ya no es necesario el stoppropagation().
  si miramos en consola y doy un click fuera de este if, va a imprimir donde se originó
  ese click, pero cuando le damos clic al enlace que dice jonmircha.com
  - sale la alerta que dice Hola soy tu amigo y docente digital y ya no abre la pagina
  porque lo detuvimos con el preventdefault y notamos a diferencia de las clases anteriores
  como no hubo necesidad del stoppropagation que se le colocaron a los div
  ya el codigo de la clase pasada lo podemos borrar, lo voy a dejar comentado para
  recordar cual se cambió.
  // $linkEventos.addEventListener("click", e => {
//   alert("Hola soy tu amigo y docente digital");
//   e.preventDefault(); 
// });

antes teniamos un foreach que asignaba dinamicamente un listener por cada div
ahora lo que vamos hacer es poner otro condicional que diga
si(el objeto que origina, el evento click en el document) es una div que esta
dentro de la clase o section (.eventos-flujo)
ejecutamos la funcion flujoEventos y le pasamos el evento para que nos diga
hola te saluda this.className, el click lo origino${e.target.className}
section que engloba todo el contenido html)
NOTAMOS que coincide con el selector de la variable de $divEventos
//const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
ya esas declaraciones de esas variables en este ejemplo no las necesitariamos
)

  // if(e.target.matches(".eventos-flujo div")){
  //   flujoEventos(e);
  // }

ya no necesitamos el stopprogation ya que el evento a sido asignado al elemento padre
que es el document. si revisamos en consola y le damos clic al div 3
aparece este mensaje: HOLA TE SALUDA undefined, el click lo originó tres
porque sale undefined? porque el this era cada una de las div y esas
si tenian un atributo className pero en este caso el document no tiene un atributo className
para comprobar que este this esta accediendo es al document de windows borramos 
className de this y revisamos en consola aparece ahora este mensaje
HOLA TE SALUDA [object Window], el click lo originó tres
pero porque dice Object si le estoy asignando el evento clic al document
recuerden que windows es el contexto globar y todo lo que este colgando al documen
se lo estamos colgando es a windows

en conclusion: con esta tecnica de la delegacion en lugar de haber 3 o 4 listener
como antes que habia para cada div un addlistener mas el click del enlace
solamente tengo la asignacion de un listener al evento clic del nodo principal
que es document y con esta tecnica aparte de mejorar el rendimiento a nivel 
de memoria y recursos de nuestra app  solo estamos teniendo una sola asignacion al 
evento click. y la programcion que necesitemos ejecutar en cada uno de los elementos
del DOM lo hacemos con un condicional vamos evaluando que coincida el selector
con el que queremos que ese elemento aplique la programacion.
otro detalle es que esta tecnica es muy importante para peticiones asincronas cuando 
usamos AJAX o FETCH y generamos elementos dinamicos, mas adelante nos daremos cuenta
que no podemos cargar un addlistener de un elemento que aun no esta cargado en el DOM
Esta tecnica es super importante si por ejemplo mandas a solicitar ciertos datos a 
una API y con eso datos generas elementos HTML dinamicos y luego esos 
elementos que generaste dinamicamente con la peticion les asignas eventos.
y la unica manera que existe para hacer esto es atraves de la delegacion de eventos
 */
  

//--------------- 18. Propiedades y Eventos -----------------------------------
/* en clases pasadas empezamos a ver las caracteristicas de los eventos
mas que solo cubrir el evento clic, mas lo que nos interesa es saber los conceptos
basicos para poder trabajar con cualquier tipo de eventos
cuando al principio de las clases del Dom hablabamos de las web Api
deciamos que hay otra parte que no es standar pero ahora los navegadores las soportan
que es BOM o el browser object model: que no es mas que una serie de metodos y objetos
que cuelgan directamente de windows. si vemos hasta ahora hemos venido trabajando
con document que es objeto JS que representa el arbol de nodos de elementos
del documento html sin embargo hay una serie de propiedades y metodos y eventos 
que son muy importante conocer que hacen referencia a la ventana del navegador
es decir al objeto windows.
como en todas clases hemos venido agregando  elementos html para poder trbajar
pongamos un h3 con el titulo MANEJO DEL BOM 
Y vamos a ver un par de propiedades que son importnates dentro de la ventana
como podemos ver impresos en pantalla de estos elementos y tbn un console.clear
para limpiar, el evento se llama resize y le pasamos una arrowfunction que le
pase el evento e imprimos un mensaje  e imprimimos el evento para que veamos
que es un evento resize de la ventana*/

// window.addEventListener("resize", (e)=>{
//   console.log("*****Event Resize*****");
// console.clear();
// console.log(window.innerWidth); //-> va a ser referencia al tamaño del ancho del viewport de nuesta ventana
// console.log(window.innerHeight);//-> altura
// //representa la parte visible, esta quitando toda la parte que no es del viewport como la caja de herramientas, marcadores, direcciones, titulos
// console.log(window.outerWidth);
// console.log(window.outerHeight); //-> tamaño que tiene la ventana de nuestro navegador
// // console.log(window.scrollX);
// // console.log(window.scrollY);
// console.log(e);
// });

/* recargamos la pagina pero el mensaje aparace cuando redimensionamos la pagina */
/* tambien podemos ver el control del desplazamiento del scroll
ahora solo vemos una barra vertical.. creemos una barran horizontal en el codigo
html en el h3 style, ahi ya vemos como se activa una barra horizontal
al momento de redireccionamiento el scroll no es un buen momento para que aparezca
// ps la ventana tiene un evento llamado scroll, asi esas dos propiedades scrollX y ScrollY
// las pasamos al otro evento
//  */
// window.addEventListener("scroll", (e)=>{
//   console.clear();
//   console.log("***Evento Scroll****");
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });
/* podemos identificar en que cordenada empieza a dibujarse
la ventana de tu navegador y para eso hacemos uso de las propiedades
screenX & screenY estas propiedades se carguen en un evento que tiene la ventana
se llama load. se ejecuta justamente cuadno haya terminado de cargar */
// window.addEventListener("load", (e)=>{
//   // console.clear();
//   console.log("***Evento Load****");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });
/* respecto de la carga en jquery teniamos en JQUERY
$(window).load(funcionaejecutar);
$(window).ready(funcionaejecutar);
$(window).on(funcionaejecutar);

para estas sintaxis el document tiene un objeto que funciona muy parecido al window
pero trabaja mas rapido y de hecho es mas apropiado trabajarlo en lugar del evento load

objeto , asignamos el evento, hagamos que imprima los mismos valores
quitemos el console.clear porque limpiarian la consola y no vamos a ver cual carga mas rapido*/

// document.addEventListener("DOMContentLoaded", (e)=>{
//   // console.clear();
//   console.log("***Evento DOMContentLoaded****");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });
/* como vemos en consola el DOMContentLoaded carga mucho mas rapido
en su tipo: de quien origina el evento es el document
mientras que en Load pareciera que es el mismo document el evento que origina es Load
path: representa el recorrido del elemento para llegar al elemento que lo origina
y cargar en load fue window y en DOMContentLoaded carga dos [document y despues window]
primero carga el dom y luego al padre por la propagacion del evento */

// -------------------------> 19. DOM METODOS <--------------------
/* en la clase pasada empezamos a ver el manejo de las propiedades del BOM
BROWSER OBJECT MODELS que es una parte del JS de los navegadores que nospermite 
manejar algunas propiedades y eventos de la ventana del navegador como tal de nuestra app
los metodos alert, confirm y promp que ya vimos en las primeras clases forman parte
de algunos metodos que podemos utilizar dentor del manejo de DOM
Para que este ejrcicio quede completado sabemos que window alert nos manda una alerta
y una alerta se compone de un mensaje de texto y un boton de aceptar, tenemos la confirmacion
es una cajita que nos va a mandar un mensaje y un boton de guardar o cancelar
eso significa que podemos almacenar la confirmacion o cancelacion en una variable
y si das aceptar ella va a validar a true esta variable y si das cancelar validaria a false
y finalmente tenemos el prompt o el aviso que es un mensaje de texto que dentro tiene su botno de aceptar o cancelar
por ende valida a true o false y que adicionalmete nos agrega como un input el cual
el usuario nos puede escribir algo. si tu guardas el prompt en una variable va almacenar el valor
que el usuario este digitando
recuerda que estos metodos cuelgan de window asi que no es necesario colocar window.alert
veamos entonces un par de metodos mas que pudieramos utilizar en algun momento
para ello voy a crear 3 botones en html, abri, cerrar e imprimir ventana
vamos a programar un listener para trabajar ccon dichos botones
debemos crear una variable para cada boton, despues le asignamos un listener a cada boton
obviamente al evento click*/

const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana");


let ventana;

$btnAbrir.addEventListener("click", e=>{
//metodo para abrir una ventana
ventana = open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", e=>{
// closed(); //-->cierra la ventana donde nos encontramos, pero no cierra
// la ventana que hemos abierto previamente para eso debemos guardarla en una variable
// que de inicio let ventana y esa variable le asignamos el valor de open
//ya se sabe que referencia esta almacena en esa variable
ventana.close();
});
$btnImprimir.addEventListener("click", e=>{
print();
});




