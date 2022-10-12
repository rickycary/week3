// how to use a button
// get the button in a variable
const firstButton = document.querySelector(".click-events button")
console.log(firstButton) //Checks in live server if it runs
console.dir(firstButton) // Not necessary but shows the button as a javascript object

// add a click event to the button - method #1
// firstButton.onclick = function(){
//     alert("This works")
// }

// add a click event - method # 2
function handleClick(){
    alert("This works")
}
firstButton.addEventListener("click", handleClick)

// store the blocks in variables
const black = document.querySelector(".bubble") // section in css
const pink = document.querySelector(".bubble div") // section in css
console.log(black)
console.log(pink)

black.addEventListener("click", function(){
    console.log("black")
})

pink.addEventListener("click", function(event){
    event.stopPropagation() //Prevents bubbling
    console.log("pink")
})

// Keyboard events
window.addEventListener("keypress", function(event){
    console.log(event)
})

window.addEventListener("keydown", function(event){
    if(event.ctrlKey && event.key === 'g'){
        this.alert("you did the thing")
    }    
    console.log(event)
})


// Handling Form Submit events
const form = document.querySelector("form")
const input = document.querySelector("input[type='text']")
console.log(form)
console.log(input)

form.addEventListener("submit", function(event){
    event.preventDefault() //Prevents refresh
    console.log(input.value)
})