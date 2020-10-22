var slideIndex = 1;
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    console.log( slides.length);
    slides[slideIndex-1].style.display = "block";
   
}




const slidetoprated =document.getElementById('slidetoprated');

//fetch URL top rated
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=aa48f2eff7284b7fe6bb91871f64f80d&language=en-US&page=1")

.then(Response => {
    console.log(Response);
    if(!Response.ok){
     throw new Error("errrooooor");
    }
    return Response.json();
})
.then(function(data){
    
console.log(data);
data.results.forEach(element => {
   
    var divcon = document.createElement('div');
    
    var Img = document.createElement('img');
    Img.style.width="550px";
    Img.style.height="500px"
    Img.style.marginLeft="50%";
    Img.style.cursor="pointer";
    Img.style.transform="translateX(-50%)";
    Img.style.verticalAlign='middle';
    slidetoprated.appendChild(divcon);
    divcon.classList.add("mySlides")
    //divcon.appendChild(divNumtext);
    divcon.appendChild(Img);
    //divcon.appendChild(divText);


   Img.src = 'http://image.tmdb.org/t/p/w185'+ element.poster_path;

   divcon.addEventListener('click',function(){
    window.open("src/themovie.html?id="+element.id);
   })

});
showSlides(slideIndex);
})
.catch((err) => console.log(err));