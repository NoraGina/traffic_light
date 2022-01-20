//A global variable  to keep  the interval
let timer;
//A global variable  to keep  the timeout
let timerOut;



function startNight(){
    document.querySelector('#greenCircle').classList.remove('green');
    document.querySelector('#yellowCircle').classList.remove('yellow');
    document.querySelector('#redCircle').classList.remove('red');
    clearTimeout(timerOut);
    clearInterval(timer);  
   timer = setInterval(function(){
    const nightCircle = document.querySelector('#yellowCircle');
    nightCircle.classList.toggle('yellow');
   }, 1000);  
}



 //Functionality at day
function startDay(){
    //add red class and remove yellow and green
    document.querySelector('#greenCircle').classList.remove('green');
    document.querySelector('#yellowCircle').classList.remove('yellow');
    document.querySelector('#redCircle').classList.add('red');
    //set timeout  function for yellow
    clearTimeout(timerOut);
    clearInterval(timer);  
    timerOut= setTimeout(changeYellow, 3000);  
}
function changeYellow(){
    //add yellow class and remove red
    document.querySelector('#redCircle').classList.remove('red');
    document.querySelector('#yellowCircle').classList.add('yellow');
    //set timeout function for green
    clearTimeout(timerOut);
    timerOut= setTimeout(changeGreen, 1000);  
}
function changeGreen(){
    //add green class and remove yellow
    document.querySelector('#yellowCircle').classList.remove('yellow');
    document.querySelector('#greenCircle').classList.add('green');
    //set timout function for yellow back
    clearTimeout(timerOut);
    timerOut = setTimeout(yellowBack, 3000);   
}
function yellowBack(){
    //add yellow class and remove green
    document.querySelector('#greenCircle').classList.remove('green');
    document.querySelector('#yellowCircle').classList.add('yellow');
    //set timout function for red
    clearTimeout(timerOut);
    timerOut = setTimeout(startDay, 1000);
}

//Add event listner on day button
const dayBtn = document.querySelector('#dayBtn');
dayBtn.addEventListener('click',startDay);
    
    
   

//Add event listner on night day button
const nightBtn = document.querySelector('#nightBtn');
nightBtn.addEventListener('click', startNight); 
  
   
    

