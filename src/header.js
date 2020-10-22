const moviesButton=document.querySelector("#movies-btn");
const subList=document.querySelector(".sub-list");
moviesButton.addEventListener("click",function(e){
    subList.classList.toggle("show");
})