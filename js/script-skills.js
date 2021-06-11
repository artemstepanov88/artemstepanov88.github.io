let skills = document.querySelector('.skills-title');
skills.addEventListener('mouseover', function(){
    document.querySelector('.skills-title').textContent = "Skills";
    
} )
    skills.addEventListener('mouseout', function(){
            document.querySelector('.skills-title').textContent = "Навыки";
        } )
let jquery = document.querySelector('img.logo_jquery');
    jquery.addEventListener('mouseover', function(){
         
        document.querySelector('img.logo_jquery').style.width = "10%";
            document.querySelector('img.logo_jquery').style.height = "10%";


    
} )
    jquery.addEventListener('mouseout', function(){
            document.querySelector('img.logo_jquery').style.width = "20%";
            document.querySelector('img.logo_jquery').style.height = "20%";
        } )
