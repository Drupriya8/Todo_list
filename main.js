let todo_form = document.querySelector("#formdata")
let input = document.querySelector("#inputdata")



todo_form.addEventListener("submit" , saveTodo)

function saveTodo(e)
{
 e.preventDefault()
   let newli = document.createElement("li")
   newli.className = "list-group-item mt-2 border border-dark"
   newli.innerText = input.value
   let ul = document.querySelector("ul")
   ul.append(newli) 
   todo_form.reset()
}

saveTodo()
