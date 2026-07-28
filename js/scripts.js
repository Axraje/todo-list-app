

//! SELECCIONAAR CONTENIDO  DE MI HTML

//* querySelector
//?             document---todo mi html----- selecionaando mi clase principal y despues el h2 que este dentro de esaa clase o SELECIONAR EL ID UNICO DE UNA ETIQUETAA
const heading = document.querySelector('.header__texto h2') //! Retornaa 0 o 1 Elementos ,,, el primero que encuentre

heading.textContent = 'Nuevo Heading' ; //* se agregaa o remplaza un nuevo h2 en mi claase , se remplza el vaalor de mi propiedaaad de mi objeto heading
console.log(heading);



//* querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a') ;
console.log(enlaces[0]);
enlaces[0].textContent ="Nuevo texto para enlance" ;
enlaces[0].href ="google.com" ;
enlaces[0].classList.add ('classNueva');
//enlaces[0].classList.remove('navegacion__enlace');

//* getElementById

const heading2 = document.getElementById ('heading');
console.log(heading2);

//!--------------------------------------------------------------------------------------------------
//* GENERAR UN NUEVO ENLACE EN HTML
//?                                        etiqueta que quieras crear en maayusculas
const nuevoEnlace = document.createElement ('A');


//! AGREGR EL atributo href aa mi enlace 
nuevoEnlace.href = 'nuevo-enlace.html' ;
//! AGREGAR L TEXTO
nuevoEnlace.textContent = 'Nuevo Enlace';
//! AGREGAR LA CLASE
nuevoEnlace.classList.add ('navegacion__enlace');

console.log(nuevoEnlace);

//*---------------- agregaarlo al documento ya una vez creado ----------

const navegacion =document.querySelector ('.navegacion') ;
navegacion.appendChild(nuevoEnlace);


//!-----------ELEMENTOS EN JAVA SCRIPT---------- */

console.log(1);

window.addEventListener('load',function(){
    console.log(2);
}); //* haay un evento--- esperar que haya cargado la ventana como JS y todos los archivos que dependen de html y qque esten listos ----- cuando el evento ocurre sucede la funcion

window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded',function () { //* solo espera que se descargue html por eso va primero este evento , no esera css o imagenes
    console.log(4);
});

console.log(5);

//! SELECIONAR ELEMENTOS click Y AAASOCIARLES UN EVENTO

   // const btnEnviar = document.querySelector ('.boton--primario')

   // btnEnviar.addEventListener('click',function name(evento) {
  //      console.log(evento);
   //     evento.preventDefault(); // preiene la funcion 
   //     console.log('Enviando Formulario');
        
   // })

//! EL EVENTO DE SUBMIT {SE OCUPA SI O SI PARA EL ENVIO DEL FORMULARIO}
//* TIENE QUE APUNTAR A TODA LA ETIQUETA DEL FORM Y TIENE QUE TENER ESA ETIQUETA SU type:"submmit"

const formulario= document.querySelector ('.formulario');



formulario.addEventListener ('submit',function(evento){
    evento.preventDefault(); //* prevenir la accion por default
   
    //*VALIDAAR EL FORMULARIO

        const {nombre,email,mensaje} = datos;
        console.log(`${nombre}-${email}-${mensaje} `);

        if (nombre ==='' || email ==='' ||mensaje===''){
          //  console.log('Todos los campos son obligatorios');
          mostrarError('Todos los campos son obligatorios');
            return; //? CORTA LA EJECUCION DEL CODIGO
            
        }
        
    //*  CREAR ALERTAR DE ENVIAAR EL FORMMULARIO
   // console.log('Enviando formulario ...');
    mostrarAcceso('Enviando formulario');
    
});

//*MUESTRA UN ERROR EN PANTALLA 
function mostrarError (mensaje){
    console.log(mensaje);

    const error = document.createElement ('P')
    error.textContent=mensaje;
    error.classList.add ('error');
    console.log(error);
    
    formulario.appendChild(error);

    //*DESAPAREZCA EL ERROR
    setTimeout(() => {
        error.remove();
        
    }, 1000);
}

//* ALERTA DE ENVIANDO FORMULARIO
function mostrarAcceso (mensaje){
    console.log(mensaje);
    
  const acceso =document.createElement ('P');
  acceso.textContent = (mensaje);
  acceso.classList.add ('acceso') ;
  console.log(acceso);

    formulario.appendChild(acceso);

    setTimeout(() => {
        acceso.remove();
    },1000);

};

//! EVENTOS DE LOS INPUTS Y TEXTAREA


const datos = {
    nombre: '', //* igual al nombre del id 
    email: '',  //* igual al nombre del id 
    mensaje: '', //* igual al nombre del id 
}


const nombreInput=document.querySelector('#nombre');
const emailInput =document.querySelector ('#email')
const mensajeInput = document.querySelector ('#mensaje');

nombreInput.addEventListener('input',leerTexto);
emailInput.addEventListener ('input',leerTexto);
mensajeInput.addEventListener ('input',leerTexto);


function leerTexto (e){
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value ;
    console.log(datos);
    
}