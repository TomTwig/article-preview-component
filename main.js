const arrowButton = document.getElementById("arrow");

const socialMenu = document.getElementById("social-menu");

let showSocialMenu = false;

arrowButton.addEventListener("click",() =>{

    if(showSocialMenu){
        socialMenu.style.display = "none";
        showSocialMenu = false;
       
    }else{
        socialMenu.style.display = "flex";
        showSocialMenu = true;
    }

})