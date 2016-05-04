var hoursOpen = ['10am', '11am','12am','1pm','2pm','3pm','4pm', '5pm'];
var cookieStores = [];

function Store(name, min, max, avgSales) {
  this.name = name;
  this.minNumCust = min;
  this.maxNumCust = max;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.totalSales = 0;
  cookieStores.push(this); //pushes new Store instances into cookieStores array
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
//render is a property of the store constructor object, NOT each instance
//1.run generate hourly for each store
//2.get the table by id (done)
Store.render = function() {
  var tableEl = document.getElementById('stores');
  //emptyCell top-left of table
  var emptyCell = document.createElement('th');
  tableEl.appendChild(emptyCell);
  //Hourly Column Headers
  for (var i = 0; i < hoursOpen.length; i++) {
    var tableHeader = document.createElement('th');
    tableHeader.textContent = hoursOpen[i];
    tableEl.appendChild(tableHeader);
  }
  //Creates "Total" Header in last column
  var totalHeader = document.createElement('th');
  totalHeader.textContent = 'Total';
  tableEl.appendChild(totalHeader);

  for (obj in cookieStores) {
    cookieStores[obj].generateHourly();//gets object you're iterating over
    var tableRow = document.createElement('tr');
    var nameRow = document.createElement('td');//td for Store names
    nameRow.textContent = cookieStores[obj].name;//gets Store names
    tableRow.appendChild(nameRow);

    //HOURLY SALES DATA
    for (hour in hoursOpen) {
      var tableData = document.createElement('td');
      tableData.textContent = cookieStores[obj].hourlySales[hour];
      tableRow.appendChild(tableData);
    }
    //Total Sales Data
    var totalsData = document.createElement('td');
    totalsData.textContent = cookieStores[obj].totalSales;
    tableRow.appendChild(totalsData);
    tableEl.appendChild(tableRow);//appending to original tr
  }
};

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac', 6, 24, 1.2);
var southCenter = new Store('South Center', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

Store.render();

//New Store data via input forms
var formEl = document.getElementById('form');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  // console.log(event.target.newstorelocation.value);
  var newStoreName = document.createElement('tr');
  var newMinCust = document.createElement('td');
  var newMaxCust = document.createElement('td');
  var newAvgCustSale = document.createElement('td');
  var insertNewStore = new Store(newStoreName, newMinCust, newMaxCust, newAvgCustSale);

  newStoreName.textContent = event.target.newstorelocation.value;
  newMinCust.textContent = parseInt(event.target.min.value);
  newMaxCust.textContent = parseInt(event.target.max.value);
  newAvgCustSale.textContent = parseFloat(event.target.avg.value);

  newStoreName.appendChild(newMinCust);
  newStoreName.appendChild(newMaxCust);
  newStoreName.appendChild(newAvgCustSale);
  Store.tableEl.appendChild(insertNewStore);//appends all data on existing table
});
// var formEl = document.getElementById('form');
//
// formEl.addEventListener('submit', function(event){
//   event.preventDefault();
//   console.log(event.target.min.value);
//   var newStoreName = event.target.newstorelocation.value;
//   var newMinCust = parseInt(event.target.min.value);
//   var newMaxCust = parseInt(event.target.max.value);
//   var newAvgCustSale = parseFloat(event.target.avg.value);
//   var InsertNewStore = new Store(newStoreName, newMinCust, newMaxCust, newAvgCustSale);
//   tableEl.appendChild(InsertNewStore);
//
//   Store.render();
// });
