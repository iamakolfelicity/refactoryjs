// Set form style directly (correct assignment syntax)
let form = document.getElementById("form");
form.style.color = "green";
form.style.background = "beige";

// Reference the table body
let tableBody = document.querySelector("#procuredTable tbody");

// Reference the submit button
let btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {
    event.preventDefault();

    // Get input values from the correct IDs
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emailAddress = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const date = document.getElementById('date').value;
    const produceName = document.getElementById('produceName').value;
    const contact = document.getElementById('contact').value;

    if (!firstName || !produceName || !date || !contact) {
        alert("Please fill in all required fields.");
        return;
    }

    // Create new row in the table
    const row = tableBody.insertRow();

    // Insert values into the row using backticks
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${produceName}</td>
        <td>${date}</td>
        <td>${contact}</td>
        <td>
            <button onclick="deleteRow(this)" class="btn btn-danger btn-sm">Delete</button>
        </td>
    `;
});

// Function to delete row
function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
