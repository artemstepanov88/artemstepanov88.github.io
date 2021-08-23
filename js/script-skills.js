let skills = document.querySelector('.skills-title');
skills.addEventListener('mouseover', function(){
    document.querySelector('.skills-title').textContent = "Skills";
  
    
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
let skills = document.querySelector('img.logo_skills');
    skills.addEventListener('mouseover', function(){
         
            document.querySelector('img.logo_skills').style.transition = "all 2s";
       
} )
    jquery.addEventListener('mouseout', function(){
    
        skills.querySelector('img.logo_skills').style.transform = "rotate(-20deg)";
        } )
