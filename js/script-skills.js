let skills = document.querySelector('.skills-title');
skills.addEventListener('mouseover', function(){
    document.querySelector('.skills-title').textContent = "Skills";
     document.querySelector('skills-title').style.transition = "all 2s";
    
} )
    skills.addEventListener('mouseout', function(){
            document.querySelector('.skills-title').textContent = "Навыки";
        } )
let jquery = document.querySelector('img.logo_jquery');
    jquery.addEventListener('mouseover', function(){
         
            document.querySelector('img.logo_jquery').style.transition = "all 2s";
            document.querySelector('img.logo_jquery').style.transform = "rotate:(50deg)";

    
} )
    jquery.addEventListener('mouseout', function(){
    
        document.querySelector('img.logo_jquery').style.transform = "rotate(20deg)";
        } )
let jquery = document.querySelector('img.logo_skills');
    jquery.addEventListener('mouseover', function(){
         
            document.querySelector('img.logo_skills').style.transition = "all 2s";
       
} )
    jquery.addEventListener('mouseout', function(){
    
        document.querySelector('img.logo_skills').style.transform = "rotate(-20deg)";
        } )
