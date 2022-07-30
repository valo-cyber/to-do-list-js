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

// let sleep = document.getElementsByClassName("val");
// let add = document.getElementsByClassName("task1");
// let me = document.getElementsByClassName("task");

// sleep.addEventListener("click", function(){
//     let paragraph = document.createElement("p")
//     paragraph.innerText = task1.value;
//     add.appendChild(paragraph);
// })

 const toDoItems = document.getElementsByClassName("to-do-items")[0];
 const input = document.getElementById("input")
 const trashIcon = document.getElementById("trash")

input.addEventListener("keydown", function(event){
    if(event.key === "Enter") addItem();
})
function addItem(){
    let divParent = document.createElement("div")
    let divChild = document.createElement("div")
    let checkIcon = document.createElement("i")
    let trashIcon = document.createElement("i")

    divParent.className = "item";
    divParent.innerHTML = "<div>" + input.value + "<div>";

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen"
    })
    divChild.appendChild(checkIcon)
    
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })
    divChild.appendChild(trashIcon)

    divParent.appendChild(divChild)

    toDoItems.appendChild(divParent)

    input.value = " ";
}