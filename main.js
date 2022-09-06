const arrowButton = document.getElementById("arrow");
const socialMenu = document.getElementById("social-menu");
const profile = document.getElementById("card__content__profile");
const profileContainer = document.getElementById("card__content__profile__container");

// let showSocialMenu = false;

// arrowButton.addEventListener("click",() =>{

//     if(showSocialMenu){
//         socialMenu.style.display = "none";
//         showSocialMenu = false;
       
//     }else{
//         socialMenu.style.display = "flex";
//         showSocialMenu = true;
//     }

// })

arrowButton.addEventListener("click",()=>{

    profile.remove();
    arrowButton.remove();
    socialMenu.style.display = "flex";
    socialMenu.style.flexDirection= "space-between";
    socialMenu.style.position = "unset";
    socialMenu.style.width = "100%";

    socialMenu.appendChild(arrowButton);


     profileContainer.appendChild(socialMenu);



})


