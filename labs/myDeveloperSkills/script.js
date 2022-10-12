// 1st Step
// Adds any data that we may want to start with
const data = {
    skills: ["Cascading Style Sheets (CSS)", "Hypertext Markup Language (HTML)"]
}


// 2nd Step
// Adds elements from HTML to start up
const $nodes = {
    div: $("div.skills"),
    form: $("form"),
    textInput: $("input[type='text"),
}

// 3rd Step
// Renders array at top to list 
function renderSkills(){
    $nodes.div.empty() // Makes it so the array doesn't repopulate

    for (let skill of data.skills){
        const $skillDiv = $("<div>").addClass("skill")
        $skillDiv.text(skill)
        $nodes.div.append($skillDiv)
    }
}

// 4th Step
function addTodo



renderSkills()
