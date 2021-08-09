

/* EVENTOS DEL MOUSE */


// let button = document.getElementById("btnMain");
// button.onclick = () => (console.log("Click"));
// button.onmousemove = () => (console.log("Move"));


/* EVENTOS DEL TECLADO */

// let input1 = document.getElementById("nombre");
// let input2 = document.getElementById("edad");

// input1.onkeyup = () => (console.log("keyUp"));
// input2.onkeydown= () => (console.log("keyDown"));


/* EVENTO CHANGE */

// let input1 = document.getElementById("nombre");
// let input2 = document.getElementById("edad");

// input1.onchange = () => (console.log("Valor1"));
// input2.onchange = () => (console.log("Valor2"));



/* EVENTO SUBMIT */

// let miformulario = document.getElementById("formulario");

// miformulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     alert("Formulario Enviado");
// }


/* EJEMPLO APLICADO */

let miformulario = document.getElementById("formulario");

miformulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    let formulario = e.target

    // console.log(formulario.children[0].value);
    // console.log(formulario.children[1].value);

    alert(formulario.children[0].value);
    alert(formulario.children[1].value);
}