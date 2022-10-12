// assign the div to a variable with JQuery
const $div = $("div")
console.log($div)


// change the text node.innerText = ""
$div.text("Hello World") // Changes text
console.log($div.text()) // Retrieves existing text


// change the html node .innerHTML = ""
$div.html("<h1>I changed the inner HTML</h1>")
console.log($div.html())


// changing a style property node.style.property = ""
$div.css("color", "red") // changes it
console.log($div.css("color")) // retrieves it


// add a class node.classList.add("")
$div.addClass("cheese") // adds class
$div.removeClass("cheese") // removes class


// add an event and use toggleClass
// node .addEventListener("event", () => {})
const $button = $('button')
$button.on("click", () =>{
    $div.toggleClass("cheese")
}) // toggles event in css under .cheese


// create an image and append to div
// document.createElement("img")
// node.setAttribute("src", "https://")
const $img = $("<img>")
$img.attr("src", "https://static.onecms.io/wp-content/uploads/sites/6/2021/11/19/Cowboy-Bebop.jpg")
console.log($img.attr("src"))
$div.append($img)


// Exercise=====================================================================

// create an li with the text of "1" and append it to the ul
const $li = $("<li>")
$li.text("1")
const $ul = $("ul")
$ul.append($li)


// // create an li with the text of "5" and append it the the ul
const $li5 = $("<li>").text("5")
$ul.append($li5)


// // create an li with the text of "3" and append it to the ul so that it is after 1 and before 5
const $li3 = $("<li>").text("3")
$li5.before($li3)


// // create an li with the text of "2" and append it to the ul so that it is after 1 and before 3
$li.after($("<li>").text("2"))


// // create an li with the text of "4" and append it to the ul so that it is after 3 and before 5
$li3.after($("<li>").text("4"))


for (let num of ["Jett", "Spike", "Faye", "Ed", "Ein", "Cowboy Bebop"]) {
    $("ul").append($("<li>").text(num))
}
//==============================================================================