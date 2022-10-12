// object to hold application data
const data = {
    todos: ["Breakfast", "Lunch"]
}

// object to hold main dom nodes
const $nodes = {
    div: $("div.todos"),
    form: $("form"),
    textInput: $("input[type='text']"),
}


//====================================================================
// Saves Todos
function saveTodos(){
    // turn the data object into a JSON
    const json = JSON.stringify(data)
    // console.log(json) // makes sure function works
    
    // saves the string in local storage
    localStorage.setItem("tododata", json)
}

// function for loaded todo from local storage
function loadTodos(){
    // get data from localStorage
    const json = localStorage.getItem("tododata")
    // update data, if json isn't undefined/falsey
    if(json){
        // parse json string into JS object
        const savedData = JSON.parse(json)
        // update data with the saved array
        data.todos = savedData.todos
    }
}
// look to end of this function for the function to run saveTodos()
//====================================================================


// function that renders todos to the div
function renderTodos(){

    // empty out the div before rendering so it doesnt repopulate
    $nodes.div.empty()

    // create loop
    for (let todo of data.todos){ // Creates for loop 
        const $todoDiv = $("<div>").addClass("todo")
        $todoDiv.text(todo) // adding text the the new todo
        $nodes.div.append($todoDiv) // displays text 
//====================================================================
// add click even to remove todo items
        $todoDiv.on("click", function(event){
            // get the text of the thing
            const text = $(event.target).text()
            // console.log(text) // Checks that function is working in chrome console
            const index = data.todos.indexOf(text)
            // console.log(index) // Checks that function is working when clicking on item. 
            data.todos.splice(index, 1) // splice will remove object in list
            renderTodos() // makes the function work so that it removes items
//====================================================================
        })
    }
    saveTodos() // allows saveTodos function to run 
}


// function for adding todos
function addTodo(newTodo){
    data.todos.push(newTodo) // .push allows to add to the array
    renderTodos()
}

$nodes.form.on("submit", function(event){
    event.preventDefault() // Prevents refreshes when you click button
    // console.log("Cheese") // Shows in console on chrome that function works
    addTodo($nodes.textInput.val()) // .val = a value property
    $nodes.textInput.val("") // empties the form
})




loadTodos() // saves data in local storage
renderTodos()
// renderTodos() // .empty makes it so that the list doesn't run again
// addTodo("Dinner") // Adds on to the array under addTodo function
// addTodo("Dessert") // Can keep adding under addTodo function

