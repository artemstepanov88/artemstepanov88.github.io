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
    document.querySelector('img.logo_jquery').style.transform = "rotate(360deg)";

    
} )
    jquery.addEventListener('mouseout', function(){
    
            document.querySelector('img.logo_jquery').style.transition = "all 2s";
        document.querySelector('img.logo_jquery').style.transform = "rotate(360deg)";
        } )
let git_logo = document.querySelector('img.logo_git');
    git_logo.addEventListener('mouseover', function(){
      
         document.querySelector('img.logo_git').style.transition = "all 1s";
         
} )
    git_logo.addEventListener('mouseout', function(){
   
       document.querySelector('img.logo_git').style.transform = "rotate(360deg)";
        } )

let skills_logo = document.querySelector('img.logo_skills');
    skills_logo.addEventListener('mouseover', function(){
      
         document.querySelector('img.logo_skills').style.transition = "all 1s";
         
} )
   skills_logo.addEventListener('mouseout', function(){
   
       document.querySelector('img.logo_skills').style.transform = "rotate(360deg)";
        } )

let my_gif = document.querySelector('img.my-logo');
    my_gif.addEventListener('mouseover', function(){
      document.querySelector('img.my-logo').style.transform = "rotate(360deg)";
         document.querySelector('img.my-logo').style.transition = "all 1s";
         
} )
   my_gif.addEventListener('mouseout', function(){
   
       document.querySelector('img.my-logo').style.transform = "rotate(360deg)";
       function sayHi(3000) {
 document.querySelector('img.my-logo').style.transform = "rotate(-360deg)";
}
        } )
