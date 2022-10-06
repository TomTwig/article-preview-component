const arrowButton = document.getElementById("arrow");
const arrowButtonMobile = document.getElementById("arrow-mobile");
const socialMenu = document.getElementById("social-menu");
const profile = document.getElementById("card__content__profile");
const profileContainer = document.getElementById("card__content__profile__container");
const link = document.getElementById("link");
const linkMobile= document.getElementById("link-mobile");

let showSocialMenu =false;

arrowButton.addEventListener("click",()=>{

if( window.matchMedia('(max-width: 768px)').matches){


    if(!showSocialMenu){
        profile.style.display = "none";
        arrowButton.style.display = "none";
    linkMobile.style.display ="flex";
    showSocialMenu = true;
    
    }else{
        profile.style.display = "block";
        linkMobile.style.display ="none";
        showSocialMenu = false;

    }

  


}else{

    if(!showSocialMenu){
        socialMenu.style.display = "flex";
        showSocialMenu = true;
    }else{
        socialMenu.style.display = "none";
        showSocialMenu = false;

    }


}





})


arrowButtonMobile.addEventListener("click",()=>{


    profile.style.display = "block";
    linkMobile.style.display ="none";

    arrowButton.style.display = "block";
    showSocialMenu = false;


})