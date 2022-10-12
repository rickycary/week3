console.log('External File')

// Assign a DOM node to a variable
const p = document.querySelector('p')
console.log(p)

// edit the text of node 
p.innerText = 'I am the new text'

// select a node based on it's class 
// CSS Selector: .green
const gh1 = document.querySelector('.green')
console.log(gh1)
// Setting styles directly
gh1.style.color = "green"
gh1.style.backgroundColor = 'pink'

// Select a node based on it's id
// CSS Selector: #red
const rh1 = document.querySelector('#red')
console.log(rh1)

// Setting the classes on a node 
rh1.classList.add('blue')

// Create an img and set its source attribute
const img = document.createElement('img')
img.setAttribute('src', "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/06/lycorisrecoil_newtrailerscreenshot.png?w=1392&ssl=1")
console.log(img)
p.append(img) // Moves image to page

// select all the lis
const lis = document.querySelectorAll("li")
console.log(lis)

for (let li of lis){
    li.classList.add("pink")
}

// looping over items in an array to create nodes
const chipmunks = ['Alvin', 'Theodore', 'Simon']

const ul = document.querySelector('ul')
for(const chipmunk of chipmunks){
    const newLi = document.createElement('li')
    newLi.innerText = chipmunk
    ul.append(newLi)
}