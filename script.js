let li = document.querySelectorAll("li");
let inicio = document.querySelector(".inicio");
let proyectos = document.querySelector(".proyectos");
let contactos = document.querySelector(".contactos");

li.forEach((l, i)=>{
    l.addEventListener("click", ()=>{
        let posicion = i;
        if(posicion === 0){
            inicio.style.display = "flex"
            proyectos.style.display = "none";
            contactos.style.display = "none";
        }else if(posicion === 1){
            inicio.style.display = "none"
            proyectos.style.display = "flex";
            contactos.style.display = "none";
        }else{
            inicio.style.display = "none"
            proyectos.style.display = "none";
            contactos.style.display = "flex";
        }
        li.forEach((l, i)=>{
            l.classList.remove("activo");
        })
        l.classList.add("activo")
    })
})
