var hoursOpen = ['10am', '11am','12am','1pm','2pm','3pm','4pm', '5pm'];
// var cookieStores = [];
// var pikePlace = cookieStores.push(new Store('Pike Place', 17, 88, 5.2));
// var seaTac = cookieStores.push(new Store('SeaTac', 6, 24, 1.2));
// var southCenter = cookieStores.push(new Store('South Center', 11, 38, 1.9));
// var bellevueSquare = cookieStores.push(new Store('Bellevue Square', 20, 48, 3.3));
// var alki = cookieStores.push(new Store('Alki', 3, 24, 2.6));

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac', 6, 24, 1.2);
var southCenter = new Store('South Center', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

function Store(name, min, max, avgSales) {
  this.name = name;
  this.minNumCust = min;
  this.maxNumCust = max;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.totalSales = 0;
};
Store.prototype.randomCustomer = function () {
  return Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust;
};
Store.prototype.generateHourly = function() {
  for (var i = 0; i < hoursOpen.length; i++) {
    this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.minNumCust, this.maxNumCust)));
    this.totalSales += this.hourlySales[i];
  }
};
Store.prototype.render = function(){
  this.generateHourly();
  var sectionEl = document.getElementById('stores');
  sectionEl.textContent = this.name;
  var ulEl = document.createElement('ul');

  for (hour in hoursOpen) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOpen[hour] + ' ' + this.hourlySales[hour];
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalSales;
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
};
// coookieStores.render([i]);
pikePlace.render();
seaTac.render();
southCenter.render();
bellevueSquare.render();
alki.render();

// var pikePlace = {
//   name: "Pike Place",
//   minNumCust: 17,
//   maxNumCust: 88,
//   avgSales: 5.2,
//   hourlySales: [],
//   totalSales: 0,
//   randomCustomer: function (maxNumCust, minNumCust) {
//     return Math.floor(Math.random() * (maxNumCust - minNumCust) + minNumCust);
//   },
//   //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
//   generateHourly: function () {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.minNumCust, this.maxNumCust)));
//       // this.totalSales = this.totalSales + this.hourlySales[i];
//       this.totalSales+= this.hourlySales[i];
//     }
//   },
//   //"for each obj, call its own render method, create it dynamically and append back to page"
//   render: function() {
//     this.generateHourly();
//     var sectionEl = document.getElementById("pikePlaceStore");
//     sectionEl.textContent = this.name;
//     var ulEl = document.createElement("ul");//creates ul

    //creates li for each hourOpen
    // for (hour in hoursOpen) {
    //   var liEl = document.createElement("li");
    //   liEl.textContent = hoursOpen[hour] + " " + this.hourlySales[hour];//each hour + totalSales
    //   ulEl.appendChild(liEl);
    //   // sectionEl.appendChild(ulEl);
    // }
//     liEl = document.createElement("li");
//     liEl.textContent = "Total: " + this.totalSales;
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl); //NEED HELP UNDERSTANDING THIS
//   }
// }
// // pikePlace.render();
//
// //SeaTac
// var seaTac = {
//   name: "SeaTac",
//   min: 6,
//   max: 24,
//   avgSales: 1.2,
//   hourlySales: [],
//   totalSales: 0,
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min) + this.min);
//   },
//   //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
//   generateHourly: function () {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.min, this.max)));
//       // this.totalSales = this.totalSales + this.hourlySales[i];
//       this.totalSales+= this.hourlySales[i];
//     }
//   },
//   //"for each obj, call its own render method, create it dynamically and append back to page"
//   render: function() {
//     this.generateHourly();
//     var sectionEl = document.getElementById("seaTacStore");
//     sectionEl.textContent = this.name;
//     var ulEl = document.createElement("ul");//creates ul
//
//     //creates li for each hourOpen
//     for (hour in hoursOpen) {
//       var liEl = document.createElement("li");
//       liEl.textContent = hoursOpen[hour] + " " + this.hourlySales[hour];//each hour + totalSales
//       ulEl.appendChild(liEl);
//       // sectionEl.appendChild(ulEl);
//     }
//     liEl = document.createElement("li");
//     liEl.textContent = "Total: " + this.totalSales;
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   }
// }
// // seaTac.render();
//
// //Southcenter
// var southCenter = {
//   name: "South Center",
//   min: 11,
//   max: 38,
//   avgSales: 1.9,
//   hourlySales: [],
//   totalSales: 0,
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min) + this.min);
//   },
//   //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
//   generateHourly: function () {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.min, this.max)));
//       // this.totalSales = this.totalSales + this.hourlySales[i];
//       this.totalSales+= this.hourlySales[i];
//     }
//   },
//   //"for each obj, call its own render method, create it dynamically and append back to page"
//   render: function() {
//     this.generateHourly();
//     var sectionEl = document.getElementById("southCenterStore");
//     sectionEl.textContent = this.name;
//     var ulEl = document.createElement("ul");//creates ul
//
//     //creates li for each hourOpen
//     for (hour in hoursOpen) {
//       var liEl = document.createElement("li");
//       liEl.textContent = hoursOpen[hour] + " " + this.hourlySales[hour];//each hour + totalSales
//       ulEl.appendChild(liEl);
//       // sectionEl.appendChild(ulEl);
//     }
//     liEl = document.createElement("li");
//     liEl.textContent = "Total: " + this.totalSales;
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   }
// }
// // southCenter.render();
//
// //Bellevue Square
// var bellevueSquare = {
//   name: "Bellevue Square",
//   min: 20,
//   max: 48,
//   avgSales: 3.3,
//   hourlySales: [],
//   totalSales: 0,
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min) + this.min);
//   },
//   //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
//   generateHourly: function () {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.min, this.max)));
//       // this.totalSales = this.totalSales + this.hourlySales[i];
//       this.totalSales+= this.hourlySales[i];
//     }
//   },
//   //"for each obj, call its own render method, create it dynamically and append back to page"
//   render: function() {
//     this.generateHourly();
//     var sectionEl = document.getElementById("bellevueSquareStore");
//     sectionEl.textContent = this.name;
//     var ulEl = document.createElement("ul");//creates ul
//
//     //creates li for each hourOpen
//     for (hour in hoursOpen) {
//       var liEl = document.createElement("li");
//       liEl.textContent = hoursOpen[hour] + " " + this.hourlySales[hour];//each hour + totalSales
//       ulEl.appendChild(liEl);
//       // sectionEl.appendChild(ulEl);
//     }
//     liEl = document.createElement("li");
//     liEl.textContent = "Total: " + this.totalSales;
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   }
// }
// // bellevueSquare.render();
//
// //Alki
// var alki = {
//   name: "Alki",
//   min: 3,
//   max: 24,
//   avgSales: 2.6,
//   hourlySales: [],
//   totalSales: 0,
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min) + this.min);
//   },
//   //use for loop to generate a random number and multiply it by the average and stick in hourly sales. add to total sales
//   generateHourly: function () {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       this.hourlySales.push(Math.floor(this.avgSales * this.randomCustomer(this.min, this.max)));
//       // this.totalSales = this.totalSales + this.hourlySales[i];
//       this.totalSales+= this.hourlySales[i];
//     }
//   },
//   //"for each obj, call its own render method, create it dynamically and append back to page"
//   render: function() {
//     this.generateHourly();
//     var sectionEl = document.getElementById("alkiStore");
//     sectionEl.textContent = this.name;
//     var ulEl = document.createElement("ul");//creates ul
//
//     //creates li for each hourOpen
//     for (hour in hoursOpen) {
//       var liEl = document.createElement("li");
//       liEl.textContent = hoursOpen[hour] + " " + this.hourlySales[hour];//each hour + totalSales
//       ulEl.appendChild(liEl);
//       // sectionEl.appendChild(ulEl);
//     }
//     liEl = document.createElement("li");
//     liEl.textContent = "Total: " + this.totalSales;
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   }
// }
// // alki.render();

//Stores are in an array before calling Render Function instead of writing storeName.render(); for each store
// var stores = [
//   pikePlace,
//   seaTac,
//   southCenter,
//   bellevueSquare,
//   alki
// ];
// for(var k = 0; k < stores.length; k++){
//   stores[k].render();
// }
