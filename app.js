var hoursOpen = ["10am", "11am","12am","1pm","2pm","3pm","4pm", "5pm"];
// var demand = []; //generate hourly should go in here?
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
  //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
  generateHourly: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.min, this.max)));
      this.totalSales = this.totalSales + this.hourlySales[i];
    }
  },
  //"for each obj, call its own render method, create it dynamically and append back to page"
  render: function() {
    this.generateHourly();
    var sectionEl = document.getElementById("pikePlaceStore");
    sectionEl.textContent = this.name;
    var ulEl = document.createElement("ul");//creates ul

    //creates li for each hourOpen
    for (hour in hoursOpen) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[hour] + this.hourlySales[hour];//each hour + totalSales
      ulEl.appendChild(liEl);
      // sectionEl.appendChild(ulEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl); //NEED HELP UNDERSTANDING THIS
  }
}
// pikePlace.render();

// var sectionEl = document.getElementById('my_list');
// var ulEl = document.createElement('ul');
//
// for(hour in hoursOpen) {
//   var liEl = document.createElement('li');
//   liEl.textContent = hoursOpen[hour];
//   var nestedUlEl = document.createElement('ul');
//
//   for(value in demand) {
//     var nestedLiEl = document.createElement('li');
//     nestedLiEl.textContent = demand[value];
//     nestedUlEl.appendChild(nestedLiEl);
//   }

//   liEl.appendChild(nestedUlEl);
//   ulEl.appendChild(liEl);
// }
// sectionEl.appendChild(ulEl);

//SeaTac
var seaTac = {
  name: "SeaTac",
  min: 17,
  max: 88,
  avgSales: 5.2,
  hourlySales: [],
  totalSales: 0,
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
  generateHourly: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.min, this.max)));
      this.totalSales = this.totalSales + this.hourlySales[i];
    }
  },
  //"for each obj, call its own render method, create it dynamically and append back to page"
  render: function() {
    this.generateHourly();
    var sectionEl = document.getElementById("seaTacStore");
    sectionEl.textContent = this.name;
    var ulEl = document.createElement("ul");//creates ul

    //creates li for each hourOpen
    for (hour in hoursOpen) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[hour] + this.hourlySales[hour];//each hour + totalSales
      ulEl.appendChild(liEl);
      // sectionEl.appendChild(ulEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  }
}
// seaTac.render();

//Southcenter
var southCenter = {
  name: "South Center",
  min: 17,
  max: 88,
  avgSales: 5.2,
  hourlySales: [],
  totalSales: 0,
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
  generateHourly: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.min, this.max)));
      this.totalSales = this.totalSales + this.hourlySales[i];
    }
  },
  //"for each obj, call its own render method, create it dynamically and append back to page"
  render: function() {
    this.generateHourly();
    var sectionEl = document.getElementById("southCenterStore");
    sectionEl.textContent = this.name;
    var ulEl = document.createElement("ul");//creates ul

    //creates li for each hourOpen
    for (hour in hoursOpen) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[hour] + this.hourlySales[hour];//each hour + totalSales
      ulEl.appendChild(liEl);
      // sectionEl.appendChild(ulEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  }
}
// southCenter.render();

//Bellevue Square
var bellevueSquare = {
  name: "Bellevue Square",
  min: 17,
  max: 88,
  avgSales: 5.2,
  hourlySales: [],
  totalSales: 0,
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
  generateHourly: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.min, this.max)));
      this.totalSales = this.totalSales + this.hourlySales[i];
    }
  },
  //"for each obj, call its own render method, create it dynamically and append back to page"
  render: function() {
    this.generateHourly();
    var sectionEl = document.getElementById("bellevueSquareStore");
    sectionEl.textContent = this.name;
    var ulEl = document.createElement("ul");//creates ul

    //creates li for each hourOpen
    for (hour in hoursOpen) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[hour] + this.hourlySales[hour];//each hour + totalSales
      ulEl.appendChild(liEl);
      // sectionEl.appendChild(ulEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  }
}
// bellevueSquare.render();

//Alki
var alki = {
  name: "Alki",
  min: 17,
  max: 88,
  avgSales: 5.2,
  hourlySales: [],
  totalSales: 0,
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
  generateHourly: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.min, this.max)));
      this.totalSales = this.totalSales + this.hourlySales[i];
    }
  },
  //"for each obj, call its own render method, create it dynamically and append back to page"
  render: function() {
    this.generateHourly();
    var sectionEl = document.getElementById("alkiStore");
    sectionEl.textContent = this.name;
    var ulEl = document.createElement("ul");//creates ul

    //creates li for each hourOpen
    for (hour in hoursOpen) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[hour] + this.hourlySales[hour];//each hour + totalSales
      ulEl.appendChild(liEl);
      // sectionEl.appendChild(ulEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  }
}
// alki.render();

var stores = [
  pikePlace,
  seaTac,
  southCenter,
  bellevueSquare,
  alki
];
for(var k = 0; k < stores.length; k++){
  stores[k].render();
}
