
const taskButton = document.getElementById("taskButton")
const taskName = document.getElementById("taskName")
const pendingUL = document.getElementById("pendingUL")
const completedUL = document.getElementById("completedUL")

taskButton.addEventListener("click", function() {
    console.log("button pushed")

    const task = taskName.value
    let listItem = document.createElement("li")
    listItem.innerHTML = task

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "checkbox")
    listItem.appendChild(checkbox)

    let removeButton = document.createElement("button")
    removeButton.setAttribute("class", "removeButton")
    removeButton.innerHTML = "Remove"
    listItem.appendChild(removeButton)

    pendingUL.appendChild(listItem)

    removeButton.addEventListener("click", function(){
        pendingUL.removeChild(this.parentElement)
    })

    checkbox.addEventListener("change", function() {
        if (this.checked) {
            completedUL.appendChild(this.parentElement)
        }
        else {
            pendingUL.appendChild(this.parentElement)
        }
    })

})

