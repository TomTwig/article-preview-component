const arrowButton = document.getElementById("arrow");
const socialMenu = document.getElementById("social-menu");
const profile = document.getElementById("card__content__profile");
const profileContainer = document.getElementById("card__content__profile__container");
const link = document.getElementById("link");

let isShowSocialMenu = false;




arrowButton.addEventListener("click",() => {


if(window.innerWidth >= 600){

    link.firstChild = arrowButton;
    if(isShowSocialMenu){
        isShowSocialMenu = false;
        socialMenu.style.display ="none";
    }else{
        isShowSocialMenu = true;
        socialMenu.style.display = "flex";
    }
}else{

    if(isShowSocialMenu){
        isShowSocialMenu = false;
        
        
        socialMenu.style.display ="none";
        profileContainer.style.display ="flex";
        profile.appendChild(arrowButton);
        profile.style.justifyContent="center";
        profile.style.display ="flex";
    

    }else{
        socialMenu.style.display = "flex";
        socialMenu.appendChild(arrowButton);
        profile.style.display ="none";
        profileContainer.style.display ="block";
        isShowSocialMenu = true;
    }

    


}


   
    })

 

   




