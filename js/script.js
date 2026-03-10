//Getting current time
const now = new Date();
const hour = now.getHours(); //0-23

//Selecting where to show the greeting 
const header = document.querySelector('#about-me');
//Creating a new paragraph element
const greeting = document.createElement('p');

//Setting text based on time 
if (hour < 12 ){
    greeting.textContent = "Good morning";
}
else if (hour < 18){
    greeting.textContent = "Good afternoon";
}
else{
    greeting.textContent = "Good evening";
}

//Adding class for styling later 
greeting.classList.add('greeting');
//Inserting the greeting at the top of header
header.prepend(greeting);

const toggleButton = document.getElementById("theme-toggle");
//Is there a value stored under the key ‘theme’? "dark" || "light" || "null"
const savedTheme = localStorage.getItem("theme");

//Applying Theme on Page Load
if(savedTheme ==="dark"){
    document.body.classList.add("dark-theme")
}
//Toggling theme on click --> when clicked run this function
toggleButton.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme"); //It flips between states for body
    //Saving current theme
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
});

