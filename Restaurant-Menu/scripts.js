const startersUL = document.getElementById("startersUL")
const entreesUL = document.getElementById("entreeUL")
const dessertsUL = document.getElementById("dessertUL")


// create array of starters
let starters = dishes.filter(function(dish) {
    return dish.course == 'Starters'
})

// create startersUL list items
let starterItems = starters.map(function(dish) {
    return `<li class="starterItem">
            <img src="${dish.imageURL}">
            <div class="itemInfo">
                <b>${dish.title}</b>
                <p>${dish.description}</p>
            </div>
            <p>${dish.price}</p>
            </li>
    `
})
// add starterItems to startersUL
startersUL.innerHTML = starterItems.join("")

// create array of entrees
let entrees = dishes.filter(function(dish) {
    return dish.course == 'Entrees'
})

// create entreesUL list items
let entreeItems = entrees.map(function(dish) {
    return `<li class="entreeItem">
            <img src="${dish.imageURL}">
            <div class="itemInfo">
                <b>${dish.title}</b>
                <p>${dish.description}</p>
            </div>
            <p>${dish.price}</p>
            </li>
    `
})
// add entreeItems to entreesUL
entreesUL.innerHTML = entreeItems.join("")

// create array of desserts
let desserts = dishes.filter(function(dish) {
    return dish.course == 'Desserts'
})

// create dessertsUL list items
let dessertItems = desserts.map(function(dish) {
    return `<li class="dessertItem">
            <img src="${dish.imageURL}">
            <div class="itemInfo">
                <b>${dish.title}</b>
                <p>${dish.description}</p>
            </div>
            <p>${dish.price}</p>
            </li>
    `
})

// add dessertItems to dessertsUL
dessertsUL.innerHTML = dessertItems.join("")

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// add a function to open menues when clicked of the tab
function openMenu(event, menuName) {
    // hide all elements with class="tabContent"
    const tabContent = document.getElementsByClassName("tabContent")
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    // Remove 'active' class from all elements with the class="tablink"
    const tablink = document.getElementsByClassName("tablink")
    for (let i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "")
    }

    // Show current tab and add "active" class to the button that opened the tab
    document.getElementById(menuName).style.display = "block"
    event.currentTarget.className += " active"
  
}