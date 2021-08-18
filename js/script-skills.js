let skills = document.querySelector('.skills-title');
skills.addEventListener('mouseover', function(){
    document.querySelector('.skills-title').textContent = "Skills";
    
} )
    skills.addEventListener('mouseout', function(){
            document.querySelector('.skills-title').textContent = "Навыки";
        } )
let jquery = document.querySelector('img.logo_jquery');
    jquery.addEventListener('mouseover', function(){
         
            document.querySelector('img.logo_jquery').style = "transition:rotate(50deg)";


    
} )
    jquery.addEventListener('mouseout', function(){
    
        document.querySelector('img.logo_jquery').style.transform = "rotate(0deg)";
        } )
