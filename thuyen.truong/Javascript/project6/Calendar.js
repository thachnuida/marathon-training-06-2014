	var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var dayName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	
	var Calendar = function (id) {
	    this.id = id;
	}

	Calendar.prototype.render = function (date) {
		var _this = this;
	    var daysnumber = 0;
	    var calendarhtml = "";
	    
	    var CurrentMonth = date.getMonth() + 1;
	    var CurrentYear = date.getFullYear();

	    
	    var daysinmonth = (new Date(CurrentYear, CurrentMonth - 1, 0)).getDate();
	    
	    var firstMonth = new Date(CurrentYear, CurrentMonth -1);
	    var firstday = firstMonth.getDay();

	    calendarhtml += "<div class='title'>" 
	    				+ "<span class='premonth'>&lt</span>" 
	    				+ "<span class='namemonth'>" + monthName[CurrentMonth - 1] + " " + CurrentYear + "</span>" 
	    				+ "<span class='nextmonth'>&gt</span>" 
	    			+ "</div>";
	    
	    calendarhtml += "<table class='calendar'><tr>";
	    
	    for (var i = 0; i < dayName.length; i++) {
	        calendarhtml += "<th>" + dayName[i] + "</th>";
	    }

	    calendarhtml += "</tr>";

        for (var i = 0; i < firstday; i++) {
        	var date = new Date(CurrentYear, CurrentMonth -1);
       	 	date.setDate(firstMonth.getDate() - firstday + i);
        	daysnumber++;
        	calendarhtml += "<td class='notmonth'>" + date.getDate() + "</td>";
    	}

	    for (var i = 1; i <= daysinmonth; i++) {
	        if (daysnumber % 7 == 0) {
	            calendarhtml += "</tr>";
	            if (i != daysinmonth) calendarhtml += "<tr>";
	            if (i == daysinmonth && daysinmonth % 7 != 0) calendarhtml += "<tr>";
	        }
	       	daysnumber++;
	        calendarhtml += "<td>" + i + "</td>";
	    }
	    
	    for (var i = 1; i <= daysnumber%7; i++) {
	       	daysnumber++;
	        calendarhtml += "<td class='notmonth'>" + i + "</td>";
	    }
	    calendarhtml += "</tr></table>";

	    document.getElementById(this.id).innerHTML = calendarhtml;

	    //bind event
	    document.getElementById(this.id).getElementsByClassName("nextmonth")[0].addEventListener("click", function () {
	        gonextmonth(_this, CurrentYear, CurrentMonth);
	    });

	    document.getElementById(this.id).getElementsByClassName("premonth")[0].addEventListener("click", function () {
	        gobackmonth(_this, CurrentYear, CurrentMonth);
	    });

	}
	function gonextmonth(CalObject, CurrentYear, CurrentMonth) {
		var nextmonth = new Date(CurrentYear, CurrentMonth, 0);
		nextmonth.setDate(nextmonth.getDate() + 1);
	    CalObject.render(nextmonth);
	}

	function gobackmonth(CalObject, CurrentYear, CurrentMonth) {
		var premonth = new Date(CurrentYear, CurrentMonth -1, 0);
	    CalObject.render(premonth);
	}

	window.onload = function () {
	    var calendar1 = new Calendar("div1");
	    calendar1.render(new Date("July 12, 2014"));
	    var calendar2 = new Calendar("div2");
	    calendar2.render(new Date("January 4, 1996"));
	}