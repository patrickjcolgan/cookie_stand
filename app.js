var hoursOpen = ["10am", "11am","12am","1pm","2pm","3pm","4pm", "5pm"];



var pikePlace = {
  minHourlyCustomers: 17,
  maxHourlyCustomers: 88,
  avgSales: 5.2,
  randomCustomer: function (max, min) {
    return Math.random() * (max - min) + min;
  }
}
randomCustomer(maxHourlyCustomers, minHourlyCustomers);

//create a for loop that generates the sales for each hour the store is open

// render: function(){
//   var liEl = document.createElement("ul");
//   var keys = Object.keys(this);
//   for (var i = 0; i < hoursOpen.length; i++) {
//     var liEl = document.createElement("li");
//     liEl.textContent = this(keys[i]);
//     ulEl.appendChild(liEl);
//   }
//   sectionEl.appendChild(ulEl);
// }
