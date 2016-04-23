var hoursOpen = ["10am", "11am","12am","1pm","2pm","3pm","4pm", "5pm"];

var pikePlace = {
  name: "Pike Place",
  min: 17,
  max: 88,
  avgSales: 5.2,
  hourlySales: [],
  totalSales: 0,
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  genrateHourly: function (){
    //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
    for (var i = 0; i < hoursOpen.length; i++) {
      hourlySales[i] = avgSales * randomCustomer(this.min, this.max)
    }
  }
}
// randomCustomer(this.max, this.min);

//create a for loop that generates the sales for each hour the store is open
//where to put Math.floor??

//get random customer




// render: function() {
//   var liEl = document.createElement("ul");
//   var keys = Object.keys(this);
//   for (var i = 0; i < hoursOpen.length; i++) {
//     var liEl = document.createElement("li");
//     liEl.textContent = this(keys[i]);
//     ulEl.appendChild(liEl);
//   }
//   sectionEl.appendChild(ulEl);
// }
