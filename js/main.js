window.onscroll = () =>{
    if(window.scrollY > 30){
        document.querySelector(".header").classList.add("fixed")
    }else{
        document.querySelector(".header").classList.remove("fixed")
    }
}