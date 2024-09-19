/* Lo que vamos hacer es exportar por defaultuna funcion que se llame hamburgerMenu. 
entonces que elementos necesita esta funcion para ejecutarse necesita el boton que
activa del panel y el panel que es el elemento que vamos a mover 
2. vamos a necesitar la delegacion de eventos
creamos una constante que se va a llamar d y que va ser igual a document
 */
export default function hamburgerMenu(panelBtn, panel, menuLink){
const d = document;

/*asignamos mediante la delegacion de eventos, el evento click al document si el objeto
que origina el evento coincide con el selector que me estas dando en panelBtn eso 
significa es que nuestro index_dom va a exportar */
//click se lo asigno a document
d.addEventListener("click", (e) =>{
/*si yo presiono el boton del panel ahi es donde yo quiero intercambiar esa clase 
is.active(quitarsela o ponersela) al elemento panel */
//si el obj que Orig el evento coincide con panelBtn o cualquier cosa que
// este dentro del boton en el css podria decir (.panel *) con el asterisco estoy diciend
// que meta todo lo que este en ese boton entonces le intercambie en su lista de clase
//si revisamos el boton codigo html nos damos cuenta que el tiene un span una clase hamburger-box e inner
//cuando le damos click a los elementos de este boton no funciona. porque la delegacion de 
//  eventos se le asigno solo al boton pero cuando damos click por fuera de las lineas   
   if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
    d.querySelector(panel).classList.toggle("is-active");
    d.querySelector(panelBtn).classList.toggle("is-active");
    }
/*si la variable que origino el evento su selector coincide con menulink que va hacer?
no vamos hacer intercambio aqui no podemos hacer un toggle sino un remove porque
cada vez que presionemos un enlace en nuestro menu de navegacion se tiene que cerrar el menu
pero ese remove tenemos que hacerselo a los dos para que regrese de tachesito a lineas 
y al panel para que se oculte*/
   if (e.target.matches(menuLink)){
    d.querySelector(panel).classList.remove("is-active");
    d.querySelector(panelBtn).classList.remove("is-active");

}
});
}
