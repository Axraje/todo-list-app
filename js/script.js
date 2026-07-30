 
 //!---------------- VARIABLES GLOBALES
 
 const formulario =document.querySelector ('.formulario') ; //* EXTRAIGO  TODO MMI ETIQUEA DE FORM -- .FORMULARIO -- PARA OCUPAR EL EVENTO SUBMIT
 const lista=document.querySelector('.contenedor-tareas');
 const tarea =document.querySelector('#tarea') //* EXTRAIGO TEXTE AREA Y LA GAURDO EN UNA VARIABLE
 
 
 let tareas = [
        {
    id: 1,
    texto: "Estudiar Git",
    completada: false
    }
 ]
 console.log(tareas);
 
  const extraer = {
    tarea:'', //* igual al id del label 
 }
//!----------EVENTO INPUT -----------------------------
tarea.addEventListener('input',leerTexto); //* EVENTO --SELECIONANDO MI VARIBLE DONDE GUARDE TEXT AREA -- SE AASIGONO UN EVENTO QUE SE GUARDE EL TEXTO QUE ESCRIBO 
function leerTexto (e){
    //console.log(e.target.value);
    extraer[e.target.id] = e.target.value ;
    console.log(extraer); 
}
 
//!----------EVENTO SUBMIT -----------------------------
  formulario.addEventListener ('submit',function(evento){
    evento.preventDefault();
    const {tarea} = extraer ; //* SACO EL VALOR DE MI PROPIEDAD tarea de mi objeto extraer y la almaaceno
    console.log(`${tarea}`);
    
    if(tarea==='')
    {
        mostrarError(`Ingrese una tarea`);
        return ;
    }

    tareaGuardada('Tarea Guardada');
    const nuevaTarea = {
    id: Date.now(),
    texto: tarea,
    completada: false
    };

    tareas.push(nuevaTarea);
    console.log(tareas);
    renderizarTareas();

});
//!----------EVENTO CLICK -----------------------------
lista.addEventListener('click', function(evento){
    evento.preventDefault();
    console.log('Click en:', evento.target); // <-- AGREGA ESTO
    console.log('Clases:', evento.target.classList); // <-- Y ESTO
    const idClick = Number(evento.target.id);
    console.log('ID detectado:', idClick); // <-- Y ESTO

    // Si clickeaste el botón de ELIMINAR
    if(evento.target.classList.contains('btn-eliminar')){
        console.log('Entró a ELIMINAR');
        tareas = tareas.filter(function(tarea){
            return tarea.id !== idClick;
        });
        renderizarTareas();
    }

    // Si clickeaste el botón de COMPLETADO
    if(evento.target.classList.contains('btn-completar')){
        tareas = tareas.map(function(tarea){
            if(tarea.id === idClick){
                tarea.completada = !tarea.completada; // invierte true/false
            }
            return tarea;
        });
        renderizarTareas();
    }
});
//*----------- FUNCIONES------------------------------
function renderizarTareas(){
    lista.innerHTML= '';
    tareas.forEach (function(tarea,indice){
        console.log(`Tarea ${indice}: ${tarea.texto}`);
        const div=document.createElement('DIV')
        div.classList.add ('tarea');
        lista.appendChild(div);
        //* PARRAFO Y SE LE ASIGNA EL VALOR 
        const parrafo=document.createElement ('P');
        parrafo.classList.add('parrafo__tarea')
        parrafo.textContent = tarea.texto;
        div.appendChild(parrafo);
        //* BOTON COMPLETADO
        const completar=document.createElement('BUTTON');
        completar.textContent = tarea.completada ? '✔ Completada' : 'Completar'; 
        completar.classList.add('btn-completar');
        completar.id = tarea.id;
        completar.style.backgroundColor = tarea.completada ? 'green' : 'red';
        div.appendChild(completar);
        //*BOTON ELIMINAR
        const eliminar=document.createElement('BUTTON');
        eliminar.textContent=('Eliminar');
        eliminar.classList.add('btn-eliminar');
        eliminar.id=tarea.id;
        div.appendChild(eliminar);
        console.log(tareas);
    });
 }
 function mostrarError (mensaje){
    console.log(mensaje);
    
        const parrafo=document.createElement('P');
        parrafo.classList.add('error');
        parrafo.textContent=(mensaje)
        console.log(parrafo);
        formulario.appendChild(parrafo);

        setTimeout(() => {
            parrafo.remove();
        }, 2000);
 }

 function tareaGuardada (mensaje){
    console.log(mensaje);
    
    const correcto=document.createElement('P');
    correcto.classList.add ('correcto') ;
    correcto.textContent = (mensaje) ;
    formulario.appendChild(correcto) ;
    console.log(correcto);
    console.log(mensaje);
        setTimeout(() => {
            correcto.remove();
        }, 2000);

}







 