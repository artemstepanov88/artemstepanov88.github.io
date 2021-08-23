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
let skills_logo = document.querySelector('img.logo_skills');
    skills_logo.addEventListener('mouseover', function(){
         document.querySelector('.logo_skills').style.transform = "rotate:(50deg)";
         document.querySelector('img.logo_skills').style.transition = "all 2s";
       
} )
    skills_logo.addEventListener('mouseout', function(){
   
     document.querySelector('.logo_skills').style.transform = "rotate:(-20deg)";
        } )
