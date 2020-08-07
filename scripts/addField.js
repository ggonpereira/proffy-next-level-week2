// Search the button
document.querySelector("#add-time")

// When the user clicks the button
.addEventListener("click", cloneField)

// Execute a action
function cloneField() {
    // Clone the fields
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) // boolean: true or false

    // Pick the fields
    const fields = newFieldContainer.querySelectorAll("input")

    // For each field, clear
    fields.forEach(function(field) {
        // Pick the "moment" field and clear it
        field.value = ""
    })

    // Put in the HTML
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
