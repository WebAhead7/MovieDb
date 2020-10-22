function vanish(loader){
    loader.classList.add("disappear");
    setTimeout(function(){
      loader.style.display="none";
      document.body.removeChild(loader);
    },1500)
  }