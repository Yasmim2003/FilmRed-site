console.log('mostrar o document', document);

const botaoTrailer = document.querySelector(".trailer");
const modal = document.querySelector(".modal");
const sair = document.querySelector(".fechar-modal");
const video= document.getElementById("video")

botaoTrailer.addEventListener("click", () =>{
   video.setAttribute("src", "https://www.youtube.com/embed/JvqcaQJgr-A");
   modal.classList.add("aberto");
});

sair.addEventListener("click", ()=>{
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
   });

