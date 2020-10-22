//PRE LOADER FUNCTION - AWWAD

var loader=document.querySelector(".loader");


///////////////////////////////



var slideIndex = 1;
var slideIndexNowPlaying = 1;
// Next/previous controls
function plusSlides(n,type) {
  
  showSlides(n,type);
 
}



function showSlides(n,type) {
  var slides;
  var indexOfSlides ;
  if(type=='toprated'){
    slideIndex+=n;
    indexOfSlides = slideIndex;
     slides = document.getElementsByClassName("mySlides");
  }else{
    slideIndexNowPlaying+=n;
    indexOfSlides = slideIndexNowPlaying;
     slides = document.getElementsByClassName("mySlides2");
  }
    var i;
   
    
    if (n > slides.length) {indexOfSlides = 1}
    if (n < 1) {indexOfSlides = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
   
    slides[indexOfSlides-1].style.display = "block";
    
   
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
    divcon.appendChild(Img);


   Img.src = 'http://image.tmdb.org/t/p/w185'+ element.poster_path;

   divcon.addEventListener('click',function(){
    window.open("src/themovie.html?id="+element.id);
   })

});
showSlides(slideIndex,"toprated");
vanish(loader);
})
.catch((err) => {
  alert("Problem when loading the page please try again later");
  console.log(err)}
  );




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
    Img2.style.width="550px";
    Img2.style.height="500px"
    Img2.style.cursor="pointer";
    Img2.style.marginLeft="50%";
    Img2.style.transform="translateX(-50%)";
    Img2.style.verticalAlign='middle';
    slideNP.appendChild(divcon2);
    divcon2.classList.add("mySlides2")
    divcon2.appendChild(Img2);
    console.log('here');


   Img2.src = 'http://image.tmdb.org/t/p/w185'+ element.poster_path;

   divcon2.addEventListener('click',function(){
    window.open("src/themovie.html?id="+element.id);
   })

});

showSlides(slideIndexNowPlaying,"nowplaying");
})
.catch((err) => {
  alert("Problem when loading the page please try again later");
  console.log(err)}
  );


