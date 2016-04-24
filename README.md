# cookie_stand
201 Class Project - OOP Javascript

Something in my for (hour in hoursOpen) is generating the same hourly sales for each hour.
.the problem was here:
liEl.textContent = hoursOpen[hour] + this.hourlySales[hour];
.instead of this.hourlySales[hour],
I had these two incorrect attempts:
..this.totalSales[hour]
..this.hourlySales
