//variables de entorno
const urlApi="http://localhost:4000/";

//DOM

let email=document.querySelector("#email")
let contraseña=document.querySelector("#contraseña")
let btnEnviar=document.querySelector("#btnEnviar")




//evento
btnEnviar.addEventListener("click",(e)=>{
    e.preventDefault();//previene el reenvio del formulario
fetch(urlApi+"login",{
    method:"POST",
    headers:{
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: email.value,
        contraseña: contraseña.value,
        })
})
.then((res) => {
    
    return res.text();
  })
.then((res) => {
    console.log(res)
    if(res==="true"){
    window.location="http://127.0.0.1:5500/dashboard.html";

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Falla en la validacion',
            text: 'clave o usuario erronea',
          })
    }
  });
})


//dom registro

let btnRegistro=document.querySelector("#btnRegistro")
let nombreRegistro=document.querySelector("#nombre")
let emailRegistro=document.querySelector("#email")
let contraseñaRegistro=document.querySelector("#contraseña")
let direccionRegistro=document.querySelector("#direccion")
let ciudadRegistro=document.querySelector("#ciudad")
let zonaPostalRegistro=document.querySelector("#zonaPostal")
let telefonoRegistro=document.querySelector("#telefono")
let esAdminRegistro=document.querySelector("#esAdmin")
//evento

btnRegistro.addEventListener("click",(e)=>{
e.preventDefault();
fetch(urlApi+"usuario",{
    method:"POST",
    headers:{
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
        nombre: nombreRegistro.value,
        email: emailRegistro.value,
        contraseña:contraseñaRegistro.value,
        direccion:direccionRegistro.value,
        ciudad: ciudadRegistro.value,
        zonaPostal: zonaPostalRegistro.value,
        telefono: telefonoRegistro.value,
        esAdmin: esAdminRegistro.value,
        })
})
.then((res)=>{
    return res.text()
})
.then((res)=>{
    console.log(res)
    if (res==="true") {
        console.log("correcta la insercion")

        
    }

})
})





// Swal.fire(
//     'Good job!',
//     'You clicked the button!',
//     'success'
//   )