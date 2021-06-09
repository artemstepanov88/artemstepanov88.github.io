
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
let logo-jquery = document.querySelector('.logo_jquery');

logo-jquery.addEventListener('mouseover', function(){
    document.querySelector('img.logo_jquery').style.width = '10%';
      document.querySelector('img.logo_jquery').style.height = '10%';
 
} )

logo-jquery.addEventListener('mouseoout', function(){
    document.querySelector('img.logo_jquery').style = 'width: 20%; height: 20%;';
 
} )
