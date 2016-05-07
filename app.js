var hoursOpen = ['10am', '11am','12am','1pm','2pm','3pm','4pm', '5pm'];
var cookieStores = [];

function Store(name, min, max, avgSales) {
  this.name = name;
  this.minNumCust = min;
  this.maxNumCust = max;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.totalSales = 0;
  this.id = name.replace(' ', '').toLowerCase();
  cookieStores.push(this); //pushes new Store instances into cookieStores array
  this.generateHourly();
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
var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac', 6, 24, 1.2);
var southCenter = new Store('South Center', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);
//render is a property of the store constructor object, NOT each instance
//1.run generate hourly for each store
//2.get the table by id (done)
var tableEl = document.getElementById('stores');
(Store.render = function() {
  //emptyCell top-left of table
  var hoursRow = document.createElement('tr');
  var emptyCell = document.createElement('th');
  hoursRow.appendChild(emptyCell);
  //Hourly Column Headers
  for (var i = 0; i < hoursOpen.length; i++) {
    var tableHeader = document.createElement('th');
    tableHeader.textContent = hoursOpen[i];
    hoursRow.appendChild(tableHeader);
  }
  //Creates "Total" Header in last column
  var totalHeader = document.createElement('th');
  totalHeader.textContent = 'Total';
  hoursRow.appendChild(totalHeader);
  tableEl.appendChild(hoursRow);

  for (obj in cookieStores) {
    cookieStores[obj].generateHourly();//gets object you're iterating over
    var tableRow = document.createElement('tr');
    tableRow.id = cookieStores[obj].id;
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
})();//bc only calling Store.render once on load, call it once on load (no longer avail in global scope bc we dont need it)
// Store.render();
Store.renderNew = function(obj) {
  var newRow = document.createElement('tr');
  newRow.id = obj.id;
  var nameTd = document.createElement('td');
  nameTd.textContent = obj.name;
  newRow.appendChild(nameTd);

  for (hour in hoursOpen) {
    var salesTd = document.createElement('td');
    salesTd.textContent = obj.hourlySales[hour];
    newRow.appendChild(salesTd);
  }
  var newTotalTd = document.createElement('td');
  newTotalTd.textContent = obj.totalSales;
  newRow.appendChild(newTotalTd);
  tableEl.appendChild(newRow);

  // var newShop = new Store(newStoreName, newMinCust, newMaxCust, newAvgCustSale);
  // newShop.generateHourly();//move to renderNew
};
// var formEl = document.getElementById('form');

//STRETCH GOAL: UPDATE EXISTING STORE'S DATA
Store.renderUpdate = function(shop, min, max, avg) {
  var trEl = document.getElementById(shop.id);
  console.log(trEl);
  shop.minNumCust = min;
  shop.maxNumCust = max;
  shop.avgSales = avg;
  shop.hourlySales = [];
  shop.totalSales = 0;
  // shop.generateHourly();//just calling generateHourly ON the instance / moving this to constructor

  for (var i = 0; i < shop.hourlySales.length; i++) { //why not hoursOpen.length?
    trEl.childNodes[i + 1].textContent = shop.hourlySales[i];
  }
  trEl.childNodes[trEl.childNodes.length - 1].textContent = shop.totalSales;
};
document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault();
  var exists = false;
  var newStoreName = event.target.newstorelocation.value;
  var newMinCust = parseInt(event.target.min.value);
  var newMaxCust = parseInt(event.target.max.value);
  var newAvgCustSale = parseFloat(event.target.avg.value);

  for (var i = 0; i < cookieStores.length; i++) {
    if (cookieStores[i].id === newStoreName.replace(' ','').toLowerCase()) {
      exists = true;
      break;
    }
  }
  if (exists === true) {
    console.log('true');
    Store.renderUpdate(cookieStores[i], min, max, avg);
  } else {
    console.log('false');
    var newStore = new Store (newStoreName, newMinCust, newMaxCust, newAvgCustSale);
    Store.renderNew(newStore);
  }
  event.target.newstorelocation.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
});

//capture values. decide if name value relates to existing row thru id
// if it does exist, get that object, pass thru renderUpdate(object that exists, min, max, avg)
// formEl.addEventListener('submit', function(event){
//   event.preventDefault();
//   var newStoreName = event.target.newstorelocation.value;
//   var newMinCust = parseInt(event.target.min.value);
//   var newMaxCust = parseInt(event.target.max.value);
//   var newAvgCustSale = parseFloat(event.target.avg.value);
//   // console.log(newStoreName);
//   //Take this newShop object and hand into renderNew method
// });
// if (newStoreName == this.id) {
//   Store.renderUpdate(newStoreName, min, max, average);
// } else {
//   Store.renderNew(newShop);
// };
