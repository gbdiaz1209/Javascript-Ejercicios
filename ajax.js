// //funcion anonima autoejecutable
// /*pasos
// 1. crear una variable que haga referencia del objeto xml http request
// var xhr va ser un nuevo objeto de XMLHttpRequest 
// que mas vamos a necesitar?
// en nuestro archivo html un elemento con el id=xhr por eso es una ol - o lista ordenada
// porque por cada usuario que viene de la API de JSON placeholder voy a crear un 
// list ITEM dinamicamente.
// 2. cremaos una variable que haga referencia a ese nodo del DOM
// $xhr que sea document.getelementbyId que vamos a manipular
// recordemos que son los fragmentos que dimos en clases pasadas..
// ahora son 110 usuarios los que me va a descargar mi petición, y veiamos que los comentarios
// son 500, las imagenes son 5000, entonces imaginenese todas esas veces insertando
// un listitem son muchas peticiones y aumenta al demanda del rendimiento
// aqui es donde estan nuevamente los fragmentos en el cual a ese elemento le podemos 
// insertar todos los datos que vamos a estar solicitando y hasta que tengamos
// todo solo hacemos una insercion.
// 3. vamos a crear un fragmento en el DOM $fragment y le decimos
// createDocumentFragment, entonces ya tengo las 2 variables al DOM y el objeto AJAX*/
(()=>{
const xhr = new XMLHttpRequest(),
$xhr = document.getElementById("xhr"),
$fragment = document.createDocumentFragment();

xhr.addEventListener("readystatechange", (e) =>{
    if(xhr.readyState !== 4) return;
    
    console.log(xhr); 

    if(xhr.status > 200 && xhr.status < 300){//cuando la peticion sea 200 ejecutas este codigo
        console.log("éxito");
        console.log(hxr.responseText);
    
//     /*vamos a imprimir la respuesta y ella viene en una propiedad llamada responseText
//     como viene en cadena json y la convierte a js entonces tengo q convertirla con parseint  
//     que es un objeto de JSON com tbn lo es el stringgfai hace lo contrario
//     1. convertir esa respuesta a json.-> creo una var json = JSON.parse(xhr.responseText) */
//     let json = JSON.parse(xhr.responseText);
//     console.log(json);
//     //como es un arreglo puedo usar el metodo foreach que cada elemento que traiga la variable json
    
    json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.mail}--${el.phone}`;
        $fragment.appendChild($li);
    }); 
     
        $xhr.appendChild($fragment);
    } else{
        // console.log("error");
        // let message = xhr.statusText || "Ocurrió un error";
        // $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

});

// xhr.open("GET","https://jsonplaceholder.typicode.com/users");
// xhr.send();

// })();
// console.log(xhr); este console los nos muestra 4 OBJETOS DE TIPO XMLHTTP 4 estados que significa,
//  antes de agregar un addeventlistener, estaba en 0 pero esos 4 tiene que ver con los estados de peticion por los que pasa.
//1. READY STATE_LOADING 2.READY STATE_LOADED 3.READY STATE_INTERACTIVE 4 READY STATE_COMPLETE
//esta es una de las primeras validaciones que tienes que hacer cuando trabajas con el objeto xmlhttprequest
//lo primero que tienes que decirle es. este codigo que esta dentro de la callback del manejador de eventos
// lo vamos a ejecutar solamente cuando la propiedad .readystate sea 4.
// porque no nos debe interesar que sea 4, porque no interesa cuando esta cargando, cuando ha sido cargado o 
//este en estado interactivo, nos INTERESA CUANDO A SIDO COMPLETADO, porque asi ya puedo hacer la m
// manipulacion en el DOM
//

/*Para que objeto XMLHttpRequest funcione necesita dos cosas..
la instancia que ya la tenemos en la var xhr y el siguiente paso
es ejecutar o asignar un evento. el evento que mas se usa en ajax es es
"readystatechange" lo puedees usar a manera de evento semantico
ejemplo xhr.onreadystatechange = y le asignas una funcion o
asignandole un addeventlistener ("readystatechange") y este evento
se lanza cuando detecta cualquier cambio de estado ya sea que la peticion 
se hay abordado o lanzado un error que se haya ompletado, es decir
todos los demas eventos que tiene AJAX estan dentro de onreadystatechange
entonces el addeventlistener recibe una callback que en este caso
va a recibir como parametro un evento y desencadenamos nuestra programacion
recordemos los pasos.
1. la instancia un objeto xmlhttprequest
2. la asiganacion del o de los eventos (load, un error, etc)
2.1 la logica de la programacion va ir dentro de la callback
 (e) =>{
    xxxx.xxxx
    xxx.xxx

    });
3.  dentro la programacion necesitamos asignarle 2 instrucciones mas
hxr la instruccion que va abrir la peticion que es el metodo OPEN y
ese metodo recibe("primer parametro es por cual vamos a comunicar - GET
uqe por la url",)
y el segundo parametro es el recuerdo, es la url que vamos hacer la peticion
("https://jsonplaceholder.typicode.com/users")


Y FINALMENTE hay que enviar la petición
entonces ejecutamos el metodo send()

 */

/* EJERCICIO API FECTH 
Usamos el patron de funciones anonimas autoeecutables, copiamos las primeras 3 lineas, es mas
no es necesario crear instancia de un obeto de ajax, solo creamos una var de tipo fetch que haga referencia
al id fetch y nuestro fragmento
(()=>{})();
COMO FUNCIONA FETCH?
escribimos el metodo fetch y nos esta pidiendo el recurso al cual va hacer referencia, en este 
caso es la url de Jsonplaceholder y adicionalmente puedes pasar un objeto con opciones, pero
esas opciones las vamos a ver cuando hagamos un CRUD con fetch
ahi podemos especificarl el method, cabeceras, course que vamos a utilizar, pero el metodo por defecto
para fetch es GET, no necesitamos este objeto, peor ten en cuenta que recibe un parametro de opciones.
FETCH ES UN MECANISMO QUE TRABAJA CON PROMESAS, entonces el resultado de fetch nos va a dar un metodo
THEN para la siguiente iteracion de codigo y para capturar nuestro error, nos da un catch y si necesitas
ejecutar. para nuestro ejemplo anterior los if y el else vendrian hacer para este el then y catch
pero pasaría si indepedientemente que mi codigo se ejecute o no, yo necesito que cierto codigo se resuelva?
como en la sesion anterior hablamos de desaparecer el loader que haciamos aparecer y desaparacer
mientras recibimos los datos. para eso podemos ejecutar un metodo delas promesas que se llam
FINALLY, y vemos que se parece mucho a try, cacth, finally que veiamos en la gestion de errores.
entonces tbn lo podemos hacer con las peticiones fetch. 
acordemonos que despues de hacer la peticion de comprobar que solamente nos mandara la peticion
cuando AJAX cuando estuviera listo es decir en 4 de acuerdo a su state. en fetch eso no lo tenemos
que hacer, pero cuando recibiamos la peticion o respuesta nosotros teniamos que convertir 
json.parse, en fetch la respuesta nos la va a dar como un objeto que NO PODEMOS manejar textualmente
ATENCION: 
EL METODO THEN ME MANDA UNA RESPUESTA.y podiamos imprimir en consola la respuesta
EL CATCH: ESPERA RECIBIR UN ERROR.
FINALLY: INDEPENDIENTEMENTE DEL RESULTADO TENGO QUE EJECUTAR ESTE CODIGO 
aca es un objeto de tipo response, trae body, headers, ok es como el readystate nos da status 200
y la url que solicitamos.
el codigo json con los 10 usuarios que me trae esta respuesta viene el body, pero el body en fetch es un
"ReadableStream" entonces yo tengo q convertirlo. lo que tenemos que hacer es generar 
un siguiente then y lo que tengo que hacer es manipular es la primera respuesta.
esta respuesta voy a convertir a un formato valido.
el API de fetch tiene un metodo llamado json para convertir esta respuesta que es un ReadableStream
a texto json, dependiendo de la splicitud podriamos convertirla a texto por eje si recbimos codigo html
o codigo xml. pero en este caso como estoy esperando de la api jsonplaceholder es un json
entonces ejecuto json, entonces esta respuesta la voy a devolver al siguiente mecanismo then
en formato json. el siguiente then recibe en formato json y si mandamos un console.log vemos que nos
muestra la consola.

hicimos una prueba alterando la url pero vimos que el error fue del get porque no accedimos
al recurso, es decir el catch no atrapo el error eso se da porque en el 
return res.json() debemos hacer una validacion como hicimos en el aterior con un 
if(xhr.status > 200 && xhr.status < 300) para eso del error aca lo vamos a manipular casi igual
porque dentro de las propiedades del objeto response tiene una que se llama ok
que vean que cuando la peticion falla manda un false y cuando valida bn entra en true.
usemos entonces un operador ternario y le decimos
si la respuesta en su parametro es verdadero, entonces pasate al siguite then y convierte la respuesta
en formato json. recordemos que fetch es un API basada en promesas entonces puedo acceder
al objeto promise y ejecutar el metodo reject para forzar a rechazar la promesa. en este caso
todo el objeto de la respuesta Promise.reject(res) y en el momenot en el que lo uso
en automatico se va a ejecutar el catch del error y podemos copiar el error del ejemplo anterior
*/

(()=>{
    
    $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
        console.log(res);
         res.text();
        res.blob(); //para aquello que no es texto
        return res.json()
    .then((res) => res.ok ? res.json() : Promise.reject(res)) //manera correcta para manejar un error con la API de FETCH      //con el objeto promise
  })
    .then(json=>{
        // console.log(json);//me trajo la informacion ya convertida de ReadableStream a formato json
//este json son esos objetos q ya convirtio a javascript
        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.mail}--${el.phone}`;
            $fragment.appendChild($li);
        }); 
         
            $fetch.appendChild($fragment);
    })
    .catch(err=>{
        // console.log(err);
         let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(()=>
        // console.log(
            "Esto se ejecutará independientemente del resultado de la promesa Fetch"
        )
    ;
})();

/* API FETCH ASYNC AWAIT */
/* 1. creamos una var que busca el id
2. creamos una var fragment para no hacer tantas inserciones al DOM
3. creamos una funcion asincrona para poder usar await 
creamos una funcion  que se llame getData y la vamos ejecutar al final
y dentro de esta funcion asincrona va a estar la invocación hacia la solicitud
creamos nuestra estructura try catch para manejar el error
recordemos en el objeto XMLHttpRequest si tengo un exito o un error en la peticion usabamos el
if-else y el mensaje de respuesta.
en el FETCH ejecutamos un finally 
en fecthasync el try es la parte positiva el catch viene hacer la captura el error
y si necesitamos capturar algo independientemente del resultado concatenamos nuestro finaly
entonces la estructura del ejercicio queda asi.
1. mis variables del dom
2. mi funcion declarada asincrona, con mi try catch preparada
3. ejecucion para ejecutar.
para empezar debemos crear una variable que se llame respuesta la cual va ser la peticion
a esa api de fetch, pero como esta peticion esta en una funcion asincrona yo puedo decirle
que antes de ejecute la siguiente linea de codigo espere(await) luego declaro una variable
que se llame json que es la que estara esperando la respuesta  de este fetch que esta guardado en resp
y aqui es donde ejecutamos el metodo .text .json depende de lo que estes esperando 
para convertirlo antes de ejecutar la siguiente linea, ya para el erro no puedo hacer un operador ternario 
para manipular el error pero podemos hacer algo similar a que hicimos con el objeto XMLHttpRequest
que era el del READYSTATE para arrojar el error al catch manualmente*/
(()=>{ 
    
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
 try {
    let resp = await fetch("https://jsonplaceholder.typicode.com/users"),
    json= await resp.json();
    // console.log(resp,json);
    /* me manda la misma respuesta del fetch con el ok: true con el status:200  
    y abajo el json es la conversion del ReadableStream que viene en el body a formato json
    entonces copio el forEach donde creo la li y asigno el nombre, correo y telefono que viene
    del resultado de la API los agrego al fragmento y luego el fragmento al DOM */

   /* acordemos que la variable resp.ok viene en true, entonces le decimos
   si yo niego y le digo: si la resp.ok es false entonces lanzamos */
//    if(!resp.ok) throw new Error("Ocurrio un errior inesperado al solicitar los datos");
   /* el objeto error en jS no aceptan objetos solo puede recibir cadena de texto */
   if(!resp.ok) //trow es un return que manda el flujo a nuestro catch y creo mi objeto
   throw {status: resp.status, statusText: resp.statusText };
   /* entonces a la hora de imprimir este error como ya no es mensaje de texto me va devolver un objeto */
    json.forEach((el) => {
                    const $li = document.createElement("li");
                    $li.innerHTML = `${el.name}--${el.mail}--${el.phone}`;
                    $fragment.appendChild($li);
                }); 
    //MI ELEMENTO DEL DOM ES fetchAsync             
                    $fetchAsync.appendChild($fragment);
        
/*COMO MANIPULO EL ERROR */
} catch (err) {
                console.log(err);
                let message = err.statusText || "Ocurrió un error";
                $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
                console.log("Estoy en el catch", err); 
/*si entra al trycatch pero no pasa ningun errorporque ese error yo lo tengo que manipular.
afuera del foreach donde hacemos la asignacion de las variables que esperan 
el resutltado de la peticion que hacemos le 
*/
 }
 finally{
    console.log("Finally, Esto se ejecutará independientemente del Try.. Catch");
    
 }
          
    }
   
getData();

})();

//* LIBRERIA EXTERNAS -  AXIOS - PETICIONES ASINCRONAS */
/* axios es una API que esta basada en promesas y nos ayuda a la hora de hacer peticiones ajax 
1. vamos a utilizar el metodo get*/

(()=>{
   
   const $axs = document.getElementById("axios"),
   $fragment = document.createDocumentFragment();

   axios.get("https://jsonplaceholder.typicode.com/user")
   .then((resp)=>{
   //  console.log(resp);

    let json = resp.data;
    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name}--${el.mail}--${el.phone}`;
      $fragment.appendChild($li);
  });        
      $axs.appendChild($fragment);
   })
   .catch((err)=>{
      // console.log(err.response);//manejo del error es error.response
      let message = err.response.statusText || "Ocurrió un error";
      $axs.innerHTML = `Error ${err.response.status}: ${message}`;
      // console.log("Manejo del error en el catch", err.response); 
   })
   .finally(()=>{
      // console.log("esto se ejecutara independientemente del resultado del Axios");
   });
})();


/* Axios Async Await */

(()=>{
   const $axsAsync = document.getElementById("axios-async"),
   $fragment = document.createDocumentFragment();

   

 async function getData() {

   try {
      let resp = await axios("https://jsonplaceholder.typicode.com/users"),
      //a diferencia de fetch no tenemos que convertir lo que viene de esa respuesta a text o json
      //sino el objeto viene parseado en el parametro data, de la resp que entrega axios.
      
      json= await resp.data;//espera que await nos entregue el objeto parseado
      console.log(resp, json);//mostrar en consola

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.mail}--${el.phone}`;
        $fragment.appendChild($li);
    });        
        $axsAsync.appendChild($fragment);
      
   } catch (err) {
      // console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axsAsync.innerHTML = `Error ${err.response.status}: ${message}`;
   }
   finally{
     console.log("esto se ejecutara independientemente del resultado del Axios");
   }
   
 }
})
getData()
})();