//selectors
const todoInput = document.querySelector(".todoitem");
const todoButton = document.querySelector(".todobutton");
const todoList = document.querySelector(".todolist");


//event listener
todoButton.addEventListener('click', addtoDO);
todoList.addEventListener("click", deleteitem);

//functions
todoInput.focus();
function addtoDO(event) {

    event.preventDefault();
    console.log("done")

    //take input of task
    const todo_work = todoInput.value;
    if (!todo_work) {
        alert("Please Enter Something to Add in to do list");
        return;
    }


    //create div
    const todoDiv = document.createElement("div");
    todoDiv.className ='todo  pt-2 pb-2';

    //create list
    const newToDo = document.createElement('input');

    newToDo.className = 'todo-item btn-dark p-2 rounded w-75 shadow  ';

    newToDo.type = "text";
    newToDo.value = todo_work;

    newToDo.innerText = todoInput.value;
    newToDo.setAttribute('readonly', 'readonly')


    todoDiv.appendChild(newToDo);



    // create edit button
    const editButton = document.createElement('button');

    editButton.innerHTML = "Edit";
    editButton.className = '  edit-btn ms-2 btn-primary p-2 ps-3 pe-3 rounded shadow ';
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);

    // create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.className ='  delete-btn ms-2  p-2 ps-3 pe-3 rounded shadow' ;
    todoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(todoDiv);

    todoInput.value = "";

    editButton.addEventListener('click', function () {
        const todoItem = this.parentNode;
        const itemText = todoItem.querySelector('.todo-item ');

        if (editButton.innerText != "Edit") {

            editButton.innerText = "Edit"

            itemText.setAttribute('readonly', 'readonly')
        }

        else {

            editButton.innerText = "Save"
            itemText.removeAttribute('readonly');
            itemText.focus();
        }

    });

}

function deleteitem(event) {
    // event.stopPropagation();
    // console.log("delete")
    // console.log(event);
    const item = event.target;
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }


}
