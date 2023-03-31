//three vars that can handle the form, input, and individual list items.
//will integrate well with the CSS.
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list = document.querySelector("#tasks");


window.addEventListener('load', () => {
    //handle all the events inside this function

    //handle the event when the form is submitted
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        //add the task to the list
        doTasks(event);


    })
});

//this is the function that will handle the tasks
// it will add the tasks to the list
// it will also remove the tasks from the list
// it will also update the tasks in the list
function doTasks(event) {
    event.preventDefault();

    //this will add to the list with using the html events.

    //create a new list item
    let task = input.value;

    const item = document.createElement("div");
    //add the item to the list  
    //we must add it to the task 
    item.classList.add("tasks");

    //we need access to the contents of the div tag so we can insert our todos there.
    //now lets have it within the contents div tag in the html so it can be aligned with screen.
    const contents = document.createElement("div");
    contents.classList.add("content");
    contents.innerText = task;
    contents.style.color = "#0e3386";
    contents.style.fontWeight = "bold";
    contents.style.font = "normal";

    //we need to make sure the tasks are within the inner must div tag with the class contents.
    item.appendChild(contents);
    //now we need to make sure our list can contain the todos.
    list.appendChild(item);

    //now we need to create an actions, button to the list
    const actions = document.createElement("div");
    actions.classList.add("actions");

    //make sure the actionns are within the item div tag.
    //this is where the updateButton 
    //we also adjust the buttons style
    const updateButton = document.createElement("button");
    updateButton.classList.add("update");
    updateButton.innerText = "Update";
    updateButton.style.color = "#0e3386";
    updateButton.style.fontWeight = "bold";
    updateButton.style.font = "normal";

    //this is where the deleteButton are within the actions div tag.
    //we also adjust the buttons style
    //we make sure this is added alongside the tasks and updateButton
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    deleteButton.style.color = "#0e3386";
    deleteButton.style.fontWeight = "bold";
    deleteButton.style.font = "normal";

    //now we need to make sure the buttons are within the actions div tag.
    actions.appendChild(updateButton);
    actions.appendChild(deleteButton);
    item.appendChild(actions);
    list.appendChild(item);
    //now we need to create events to handle the edit and delete buttons actions. 



    //this is where the updateButton is handled
    updateButton.addEventListener('click', function (event) {
        event.preventDefault();
        //we need to get the task from the input    
        let task = input.value;
        //we need to get the task from the list
        document.getElementById("tasks").innerHTML = task;





        

    });

    deleteButton.addEventListener('click', function (event) {
        event.preventDefault();
        list.removeChild(item);
    });
}







