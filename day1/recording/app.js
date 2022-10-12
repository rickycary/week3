console.log("External File")

// assign a DOM node to a variable
const p = document.querySelector("p")
console.log(p)

// edit the text of the node
p.innerText = "I am the new text"

// select a node based on its class
// CSS Selector: .green
const gh1 = document.querySelector(".green")
console.log(gh1)

// Setting styles directly
gh1.style.color = "green"
gh1.style.backgroundColor = "pink"

// select a node based on its id
// CSS Selector: #red
const rh1 = document.querySelector("#red")
console.log(rh1)

// Setting the classes on a node
rh1.classList.add("blue")

// Create an img and set its source attribute
const img = document.createElement("img")
img.setAttribute("src", "https://www.rd.com/wp-content/uploads/2018/02/30_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_124167640_YamabikaY.jpg?fit=700,467")
p.append(img)
console.log(img)