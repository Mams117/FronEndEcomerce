
const api_usuario="http://localhost:4000/login"
const email = document.querySelector("#email");
const contraseña = document.querySelector("#contraseña");
const botonEnviar= document.querySelector("#boton");

botonEnviar.addEventListener("click", (e) => {
fetch(api_usuario)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
 e.preventDefault();
fetch(api_usuario, {
    method: "POST",
    headers: {
 "Content-Type": "application/json",
 },
 body: JSON.stringify({
email: email.value,
contraseña: contraseña.value,
}),})
      .then((res) => {
        return res.json();
      })
      .then(() => {
      });
  });

















