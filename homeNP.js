var slideIndexNowPlaying = 1;
// Next/previous controls
function nowPlusSlides(n) {
  nowShowSlides(slideIndexNowPlaying += n);
}

// Thumbnail image controls
function nowCurrentSlide(n) {
  nowShowSlides(slideIndexNowPlaying = n);
}

function nowShowSlides(n) {
    var x;
    var slidesNow = document.getElementsByClassName("mySlides2");
    
    if (n > slidesNow.length) {slideIndexNowPlaying = 1}
    if (n < 1) {slideIndexNowPlaying = slidesNow.length}
    for (x = 0; x < slidesNow.length; x++) {
      slidesNow[x].style.display = "none";
    }
   
    console.log( slidesNow.length);
    slidesNow[slideIndexNowPlaying-1].style.display = "block";
}

const slideNP = document.getElementById('slideNowPlaying');





fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=aa48f2eff7284b7fe6bb91871f64f80d&language=en-US&page=1")

.then(Response => {
    console.log(Response);
    if(!Response.ok){
     throw new console.error(errrooooor);
    }
    return Response.json();
})
.then(function(data){
    
console.log(data);
data.results.forEach(element => {
   
    var divcon2 = document.createElement('div');
    
   
    var Img2 = document.createElement('img');
    Img2.style.width="100%";
    Img2.style.height="600px"
    Img2.style.verticalAlign='middle';
    slideNP.appendChild(divcon2);
    divcon2.classList.add("mySlides2")
    //divcon.appendChild(divNumtext);
    divcon2.appendChild(Img2);
    //divcon.appendChild(divText);
    console.log('here');


   Img2.src = 'http://image.tmdb.org/t/p/w185'+ element.poster_path;

   divcon2.addEventListener('click',function(){
    window.open("themovie.html?id="+element.id);
   })

});
nowShowSlides(slideIndex);
})
.catch((err) => console.log(err));

