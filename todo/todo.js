
function updateTable() {
    // Get the input values
    const task = document.getElementById("task").value;
    const date = document.getElementById("date").value;

    // Get the table body element
    const tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];

    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert new cells and add the input values
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = date;
    cell2.textContent = task;

    // Create the delete button cell
    const deleteCell = newRow.insertCell(2);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() { deleteRow(deleteButton); };
    deleteCell.appendChild(deleteButton);

    // Create the edit button cell
    const editCell = newRow.insertCell(3); // Insert the edit button in the next cell (index 3)
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() { editRow(newRow); };
    editCell.appendChild(editButton);

    // Clear the inputs after adding to the table
    document.getElementById("task").value = '';
    document.getElementById("date").value = '';
}

// Delete Row Function
function deleteRow(button) {
    const row = button.parentElement.parentElement; // Get the row containing the button
    row.remove(); // Remove the row from the table
}

// Edit Row Function
function editRow(row) {
    // Get the current values of the row
    const dateCell = row.cells[0];
    const taskCell = row.cells[1];

    // Set the input fields with current row values
    document.getElementById("task").value = taskCell.textContent;
    document.getElementById("date").value = dateCell.textContent;

    // Optionally, remove the row after editing
    row.remove(); // Remove the row, it will be replaced with new one after saving
    tableData.push({ task: task, date: parseInt(date) }); 
}
