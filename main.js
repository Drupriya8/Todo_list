let todo_form = document.querySelector("#formdata")
let input = document.querySelector("#inputdata")
let todoList = document.querySelector(".todo-list")


todo_form.addEventListener("submit", saveTodo)

function saveTodo(e) {
  e.preventDefault()
  let newtext = input.value
  let newli = document.createElement("li")
  let newinnerhtml = `
   <span class="text fs-4">${newtext}</span>
   <div class="todo-buttons">
       <button class="todo-btn done">Done</button>
       <button class="todo-btn remove">Remove</button>
   </div>`;

  //  newli.className = "list-group-item mt-2 border border-dark"
  //  newli.innerText = input.value  

  newli.className = "list-group-item mt-2 border border-dark d-flex align-items-center justify-content-between"
  newli.innerHTML = newinnerhtml
  todoList.append(newli)

  //  todo_form.reset()
}

saveTodo();

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});

