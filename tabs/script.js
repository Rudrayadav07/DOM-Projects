
const tabButton = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

tabButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        const tabId = button.getAttribute("data-tab")
        console.log(tabId);
 tabContent.forEach(btn =>{btn.classList.remove("active")});
 tabButton.forEach(content =>{content.classList.remove("active")})

button.classList.add("active")
document.getElementById(tabId).classList.add("active")
 
 })
 


})