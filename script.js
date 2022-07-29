// function sleep(){
//     document.getElementsByClassName("val")
// }
// function add(){
//     document.getElementsByClassName("task1")
// }
// function me(){
//     document.getElementsByClassName("task")
//     let paragraph = document.createElement("p")

// }

// addEventListener("click")

let sleep = document.getElementsByClassName("val");
let add = document.getElementsByClassName("task1");
let me = document.getElementsByClassName("task");

sleep.addEventListener("click", function(){
    let paragraph = document.createElement("p")
    paragraph.innerText = tea.value;
    add.appendChild(paragraph);
})