let todo_form = document.querySelector("#formdata")
let input = document.querySelector("#inputdata")
let todoList = document.querySelector(".todo-list")




function saveTodo(e) {
    e.preventDefault()
   
    let newli = document.createElement("li") 
    newli.className = "list-group-item mt-2 fs-4 border border-dark d-flex align-items-center justify-content-between"
    newli.innerText = input.value 
    todoList.append(newli)
    let removebtn = document.createElement("button")
    removebtn.className = "todo-btn remove"
    removebtn.innerText = "Remove"
    newli.appendChild(removebtn)  
     todo_form.reset()
  }
  
//   saveTodo();

  todo_form.addEventListener("submit", saveTodo)

  todoList.addEventListener("click", removetodo)

  function removetodo(e){
    if(e.target.className.includes("remove")){
        let removedLi = e.target.parentElement
        todoList.removeChild(removedLi)
    }
    
  }
  removetodo()