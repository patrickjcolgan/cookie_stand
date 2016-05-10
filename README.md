# cookie_stand
##201 Class Project - OOP Javascript - Classes 7 - 12

##Author: Patrick Colgan

Something in my for (hour in hoursOpen) was generating the same hourly sales for each hour.
The problem was here:
liEl.textContent = hoursOpen[hour] + this.hourlySales[hour];
Instead of this.hourlySales[hour], I had these two incorrect attempts: ..
+ this.totalSales[hour]
+ this.hourlySales

###Functions within Functions
randomCustomer() is within generateHourly(), which is inside render: function()

#Style-Guide
+ Header, body, and footer style guide
+ background-color, font-color, font, and links included

### N9 and N10
For N9, implemented constructor function, so I didn't have to write duplicate code for each store.

cookieStores.push(this);
This code was added to constructor function so new stores could be added

For N10, replaced ul and li scripts to put data in a table.

_No longer using .prototype for render.
Instead, render is a property of the store constructor object, NOT each instance. This means I could no longer use "this" within render._

###N10 Stretch Goal
+ Store.render() function moved inside an IFFE

+ Store.renderNew() must update the id and the name of the store. This is done with `newRow.id = obj.id;` and `nameTd.textContent = obj.name;`

+ Store.renderUpdate() requires 4 arguments (assumes first arg is an instance of Store)
  + Must create new table row: `Store.renderUpdate = function(shop, min, max, avg) {
    var trEl = document.getElementById(shop.id);`
  + This updates hourlySales `for (var i = 0; i < shop.hourlySales.length; i++) { //why not hoursOpen.length?
    trEl.childNodes[i + 1].textContent = shop.hourlySales[i];
  }`
  + This updates totalSales `trEl.childNodes[trEl.childNodes.length - 1].textContent = shop.totalSales;
};`

+ Added a Boolean value to Event Listener
+ Then, created IF/ELSE to determine if Store.renderNew() or Store.renderUpdate() should be called
