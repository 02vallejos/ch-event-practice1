


// Vamos paso a paso
// 1. Tenemos que tomar los datos del formulario cuando se hace click en cargar

// 2. Una vez hemos tomado los datos tenemos que 
//  a. Calcular el promedio
//  b. Mostrarlos en el html --> Donde los vamos a mostrar?
//  Necesito capturar el lugar donde los vamos a mostrar

// 3. Si aprueba lo mostramos en verde, y si desaprueba lo mostramos en rojo

listName = [];

let myForm = document.querySelector('form');
let myList = document.querySelector('#lista');

myForm.addEventListener('submit', (subEvent) => {
    // Hacer lo que sea con los datos
    subEvent.preventDefault();

    let name = myForm.querySelector('#nombre');
    let grade1 = myForm.querySelector('#nota1');
    let grade2 = myForm.querySelector('#nota2');
    let grade3 = myForm.querySelector('#nota3');
    let mjs = myForm.querySelector('#result');

    // Comprobamos que ingresó todos los datos
    if (name.value == "") {
        mjs.innerText = 'No ingreso el nombre'
    } else if (grade1.value == "") {
        mjs.innerText = 'No ingreso Nota 1'
    } else if (grade2.value == "") {
        mjs.innerText = 'No ingreso Nota 2'
    } else if (grade3.value == "") {
        mjs.innerText = 'No ingreso Nota 3'
    } else {
        mjs.innerText = 'Datos Correctos'

        let average = ((Number(grade1.value) + Number(grade2.value) + Number(grade3.value)) / 3);
        // console.log(`El promedio de ${name.value} es ${average}`);

        if (!listName.includes(name.value)) {
            listName.push(name.value);
            let para = document.createElement('p');
            if (average >= 7) {
                //Aprobado
                para.innerText = `Alumno: ${name.value} Aprobó 🎉`;
                para.classList.value = 'texto-aprobado';
            } else {
                // Desaprobado
                para.innerText = `Alumno: ${name.value} No Aprobó 😒`;
                para.classList.value = 'texto-desaprobado';
            }
            myList.append(para);
        } else {
            mjs.innerText = `el nombre ${name.value} ya esta cargado`;
        }

    }
})