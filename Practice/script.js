// let h1 = document.createElement("h1");
// h1.innerHTML = "hello world";
// document.body.appendChild(h1)

// first you have to create an element and
//  then perpend or append an element 
// that's it
// let li = document.querySelectorAll("li");
// let ul = document.querySelector("ul");

// li.forEach((element) => {
//     console.log(element);
    
// });
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textcontent = "New Task";
// ul.appendChild(li)

let sel = document.querySelector("select");
let h1 = document.querySelector("h1")
sel.addEventListener("change",(dets)=>{
h1.textContent = `${dets.target.value} is Selected`
})