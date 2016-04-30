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
Store.prototype.render = function() {
  this.generateHourly();
  var tableEl = document.getElementById('stores');
  var tableData = document.createElement('td');
  tableEl.appendChild(tableData);
  // tableRow.appendChild(tableData);

  for (hour in hoursOpen) {
    var tableRow = document.createElement('tr');
    tableRow.textContent = hoursOpen[hour] + ' ' + this.hourlySales[hour];
    tableData.appendChild(tableRow);
  }
  var totalsRow = document.createElement('tr');
  totalsRow.textContent = 'Total ' + this.totalSales;
  tableRow.appendChild(totalsRow);
};
// Store.prototype.render = function(){
//   this.generateHourly();
//   var sectionEl = document.getElementById('stores');
//   var newStore = document.createElement('section');//new section for each store?
//   sectionEl.appendChild(newStore);//appends var newStore to new sectio
//   var ulEl = document.createElement('ul');//creates ul
//
//   //creates li for each hoursOpen, then populates with hourlySales
//   for (hour in hoursOpen) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hoursOpen[hour] + ' ' + this.hourlySales[hour];
//     ulEl.appendChild(liEl);
//   }
//   //Creates li for Totals row
//   var totaLiEl = document.createElement('li');
//   totaLiEl.textContent = 'Total: ' + this.totalSales;
//   ulEl.appendChild(totaLiEl);
//   newStore.textContent = this.name;
//   newStore.appendChild(ulEl);
// };
var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac', 6, 24, 1.2);
var southCenter = new Store('South Center', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

for (store in cookieStores){
  cookieStores[store].render();
}
