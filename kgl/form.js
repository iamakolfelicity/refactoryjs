let form=document.getElementById("form").style.color=("green")
const background=document.getElementById("form").style.background="beige"
//const background=document.form.style.background=("blue")
let tableBody=document.querySelector("#procuredTable tbody")
//let tbody=document.getElementById("tbody")

let btn=document.getElementById("btn")
btn.addEventListener("click",function(event){
    event.preventDefault()
// let para=document.createElement("p")
// para.innerHTML=("successfully submitted")
// document.body.appendChild(para)
// console.log(" form submitted")


const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('national ').value;
const AmountOfProduce = document.getElementById('tonnage').value;
const emailAddress = document.getElementById('locate').value;
const date = document.getElementById('date').value;
const produceName = document.getElementById('produce').value;
const contact = document.getElementById('contact').value;

      const row = tableBody.insertRow();

      // Insert values into the row using backticks and template literals
      row.innerHTML = `
        <td>${firstName} </td>
        <td>${national} </td>
          <td>${produceName}</td>
           <td>${date}</td>
            <td>${AmountOfProduce} </td>
          <td>${locate}
        
       
   <td>${contact}</td>
        <td>
          <button onclick="deleteRow(this)">Delete</button>
        </td>
      `;

})
function deleteRow(button) {
  const row = button.parentElement.parentElement; // Get the row containing the button
  row.remove(); // Remove the row from the table
}

//validation


function formValidation(){
  const firstName = document.getElementById('firstName');

  if(firstName.value.length==0){
   firstName.style.border="2px solid red"  
  return false            
  }
  
}

