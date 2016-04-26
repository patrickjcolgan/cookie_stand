# cookie_stand
##201 Class Project - OOP Javascript - Class 7

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
+Header, body, and footer style guide
+Future considerations: font size in body; font color in footer
