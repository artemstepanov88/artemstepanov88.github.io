
let logo = document.querySelector('.logo');

logo.addEventListener('mouseover', function(){
    document.querySelector('.logo').style.opacity = 0.2; 
    
   
})
    logo.addEventListener('mouseout', function(){
        document.querySelector('.logo').style.opacity = 0.3; 
           
})
logo.addEventListener('mouseover', function(){

    document.querySelector('.name').textContent = "Приветствую Вас"; 



})
logo.addEventListener('mouseout', function(){

    document.querySelector('.name').textContent = "Artem Stepanov"; 

} )
let c = document.querySelector('.menu');
c.addEventListener('mouseover', function(){
    document.querySelector('.name-info').textContent = "This is Javascript"; 

} )
c.addEventListener('mouseout', function(){
    document.querySelector('.name-info').textContent = "Junior Front-End developer"; 
 
} )
let skills = document.querySelector('.skills-title');
skills.addEventListener('mouseover', function(){
    document.querySelector('.skills-title').textContent = "Junior Front-End developer";
     
 console.log("Работатет 11.06.21")
} )
