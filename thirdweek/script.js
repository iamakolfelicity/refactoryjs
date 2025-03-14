let kglStore = { 
    beans: 100, 
    maize: 200, 
    cowPeas: 150 
    }; 
    function updateStock() {
        let produce = document.getElementById("produce").value; // Get
        //selected produce
        let newStock = document.getElementById("newStock").value; // Get input
       // value
        if (newStock !== "" && newStock > 0) {
        kglStore[produce] = parseInt(newStock); // Update stock in object
        document.getElementById(produce + "Stock").textContent = newStock;
        alert("✅ Stock updated successfully!");
        } else {alert("❌ Please enter a valid stock quantity!");
        }
    }