const url_Api="http://localhost:4000/productos";

fetch(url_Api)
.then((response)=>response.json())
.then((res)=>{
    console.log(res)
    for (let index = 0; index < res.length; index++) {
      const cardBody=element
    }
})