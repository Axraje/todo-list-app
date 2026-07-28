 
 

 
 
 
 
 const extraer = {
    tarea:'', //* igual al id del label 
 }


 const tarea =document.querySelector('#tarea') //* EXTRAIGO TEXTE AREA Y LA GAURDO EN UNA VARIABLE

tarea.addEventListener('input',leerTexto); //* EVENTO --SELECIONANDO MI VARIBLE DONDE GUARDE TEXT AREA -- SE AASIGONO UN EVENTO QUE SE GUARDE EL TEXTO QUE ESCRIBO 
function leerTexto (e){
    //console.log(e.target.value);
    extraer[e.target.id] = e.target.value ;
    console.log(extraer);
    
}
 

 const formulario =document.querySelector ('.formulario') ; //* EXTRAIGO  TODO MMI ETIQUEA DE FORM -- .FORMULARIO -- PARA OCUPAR EL EVENTO SUBMIT
  
  formulario.addEventListener ('submit',function(evento){
    evento.preventDefault();
    const {tarea} = extraer ; //* SACO EL VALOR DE MI PROPIEDAD tarea de mi objeto extraer y la almaaceno
    console.log(`${tarea}`);
    
    if(tarea==='')
    {
        mostrarError(`Ingrese una tarea`);
        return ;
    }

    tareaGuardada('Tarea Guardada','Eliminar','Completado');

});

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


 function tareaGuardada (mensaje,mensaje2,mensaje3){
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

        const {tarea} = extraer ;
        const lista=document.querySelector('.lista');
        const resultado =document.createElement('P');

        resultado.classList.add ('lista') ;
        resultado.textContent= (tarea) ;
        lista.appendChild(resultado);
        console.log(resultado);
        


        const eliminar=document.createElement ('input');

        eliminar.classList.add ('eliminar');
        eliminar.classList.add('boton');
        eliminar.value=(mensaje2) ;
        eliminar.type=('submit');
        lista.appendChild(eliminar);
        console.log(eliminar);
        console.log(mensaje2);


        const completada =document.createElement('input');

        completada.classList.add('completada');
        completada.classList.add ('boton');
        completada.type=('submit');
        completada.value=(mensaje3);
        lista.appendChild(completada);
        

    lista.addEventListener('click', function(evento) {
    evento.preventDefault();


    if (evento.target.classList.contains('eliminar')) {
        resultado.remove(); 
        eliminar.remove();
        completada.remove();
       // evento.target.remove(); 

    }

    if (evento.target.classList.contains('completada')) {
        // 'evento.target' es el input donde se hizo clic. 
        // Le añadimos/quitamos la clase 'input-completado-activo'
        console.log('Completado');
        evento.target.classList.toggle('input-completado-activo');
    }
});

 }



