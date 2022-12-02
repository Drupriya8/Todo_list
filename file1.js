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
  // removetodo()




  let celcius = document.querySelector(".celcius")
  let fahrenheit = document.querySelector(".Fahrenheit")
  let convert = document.querySelector(".convertform")

  convert.addEventListener("submit" , converttodo)
 

  function converttodo(e){
    e.preventDefault()
    fahrenheit.innerText = (celcius.value) * 9/5 + 32
    console.log(celcius);

  }
  


  let signupform = document.querySelector(".signup-form")
  let username  = document.querySelector("#username")
  let contact = document.querySelector("#phone")
  let email = document.querySelector("#email")
  let about = document.querySelector("#about")
  let count = 0
 

  signupform.addEventListener("submit", converttable)

  function converttable(e){
    e.preventDefault()

    count++
    let tablebody = document.querySelector(".tablebody")
    let tablerow = document.createElement("tr")
    let tabledatahead = document.createElement("th")
       tabledatahead.innerText = count
    let tabledat1 = document.createElement("td")
       tabledat1.innerText = username.value
    let tabledat2 = document.createElement("td")
       tabledat2.innerText = contact.value
    let tabledat3 = document.createElement("td")
       tabledat3.innerText = email.value
    let tabledat4 = document.createElement("td")
       tabledat4.innerText = about.value

       
    
    tablebody.appendChild(tablerow)
    tablerow.appendChild(tabledatahead)
    tablerow.appendChild(tabledat1)
    tablerow.appendChild(tabledat2)
    tablerow.appendChild(tabledat3)
    tablerow.appendChild(tabledat4)
    


  }







