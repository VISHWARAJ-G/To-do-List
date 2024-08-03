let todoArray = JSON.parse(localStorage.getItem('todoArrayItem')) || [];
let dateArray = JSON.parse(localStorage.getItem('dateArrayItem')) || [];

let result = document.querySelector(".oBox");
show();
document.querySelector('.addButton').addEventListener('click',() => {
    add();
})
function add(){
    let todoName = document.querySelector(".todoName").value;
    let todoDate = document.querySelector(".todoDate").value;
    if (!Array.isArray(todoArray)) {
        todoArray = [];
    }
    if (!Array.isArray(dateArray)) {
        dateArray = [];
    }
    if (todoName && todoDate){
        todoArray.push(todoName);
        dateArray.push(todoDate);
        document.querySelector(".todoName").value="";
        document.querySelector(".todoDate").value="";
        localStorage.setItem('todoArrayItem',JSON.stringify(todoArray));
        localStorage.setItem('dateArrayItem',JSON.stringify(dateArray));
        show();
    }else if (!todoName && !todoDate){
        alert("Enter Your Todo name and Todo date");
        document.querySelector(".todoName").value="";
    }else if(!todoName){
        alert("Enter Your Todo name");
        document.querySelector(".todoName").value="";
    }else if(!todoDate){
        alert("Enter Your Todo date");
    }
}
function show(){
    todoArray = JSON.parse(localStorage.getItem('todoArrayItem'))||[];
    dateArray = JSON.parse(localStorage.getItem('dateArrayItem'))||[];
    result.innerHTML="";
    for (let i=0;i<todoArray.length;i++){
        result.innerHTML += `
        <div class="iBox">
            <div class="mediadatebox">${dateArray[i]}</div>
            <div class="Sno">${i+1}</div>
            <div class="todoNamebox">${todoArray[i]}</div>
            <div class="datebox">${dateArray[i]}</div>
            <button class="deleteButton" value="${i}">Delete</button>
            <button class="mediaDeleteButton" value="${i}">X</button>
        </div>
        `;
    }
    let deleteButtonArray = document.querySelectorAll('.deleteButton');
    deleteButtonArray.forEach((value,index) => {
        value.addEventListener('click',() => {
            deleting(index);
        })
    })
    let mediaDeleteArray = document.querySelectorAll('.mediaDeleteButton');
    mediaDeleteArray.forEach((value,index) => {
        value.addEventListener('click',() => {
            deleting(index);
        })
    })
}
function deleting(value){
    todoArray.splice(value,1);
    dateArray.splice(value,1);
    localStorage.setItem('todoArrayItem',JSON.stringify(todoArray));
    localStorage.setItem('dateArrayItem',JSON.stringify(dateArray));
    show();
}