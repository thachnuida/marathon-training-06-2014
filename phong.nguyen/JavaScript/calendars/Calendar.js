
//CALENDAR 
monthnames = ["Jan","Feb","Mar","Apr","May", "Jun", "Jul","Aug","Sep","Oct","Nov"," Dec"];
daynames=["Su","Mo","Tu","We","Th","Fr","Sa"];
function Calendar(id){
    this.id=id;
}
Calendar.prototype.render=function(now){
    var day    = now.getDate(),
        month  = now.getMonth(),
        year   = now.getFullYear();
    var thisid = this;
        this.month = month;
        this.day = day;
        this.year = year;
    var html="",
        days,
        day2=1,
        pre_days;
    // first day of month
    var firstDay    =  new Date(year,month, 1);
    var starting    =  firstDay.getDay();
    // find number of day in month
    days=getDaysInMonth(month+1,year); 
    if (month==0){
        pre_days=getDaysInMonth(month+12,year-1); 
    }
    else{
        pre_days=getDaysInMonth(month,year);
    }

    html+='<table class="table">';
        html+='<tr><th colspan="7">';
            html+='<button class="previousYear"><<</button>'
            html+='<button class="previousMonth"><</button>'
            html+=monthnames[month];
            html+=year;
            html+='<button class="nextMonth">></button>'
            html+='<button class="nextYear">>></button>'
        html+='</th></tr>';
        html+='<tr class="header">';
        for (var i = 0; i < 7; i++ ){
            html += '<td class="nameday">';
            html += daynames[i];
            html += '</td>';
        }    
        html+='</tr>';  
        var nextday=1;
        var pre_days2=pre_days-starting+1;
        for (var i = 0; i <5 ; i++){
        html+='<tr>';    
            for (var j = 0; j <= 6; j++) { 
                if (i==0 && j<starting){
                    html += '<td class="other_number">';     
                    html += pre_days2++;   
                    html += '</td>';            
                }
                else if (day2 <= days && (i > 0 || j >= starting)) {
                    html += '<td class="number">';     
                    html += day2;
                    day2++;     
                    html += '</td>';            
                }
                
                else if (day2>days){
                    html += '<td class="other_number">';  
                    html += nextday;   
                    html += '</td>'; 
                    nextday++;     
                }
            }          
        html +='</tr>';       
        }
    html+='</table>';    
    document.getElementById(this.id).innerHTML=html; 
    document.getElementById(this.id).getElementsByClassName("previousMonth")[0].onclick=function(){previousM()};
    document.getElementById(this.id).getElementsByClassName("nextMonth")[0].onclick=function(){nextM()};
    document.getElementById(this.id).getElementsByClassName("previousYear")[0].onclick=function(){previousY()};
    document.getElementById(this.id).getElementsByClassName("nextYear")[0].onclick=function(){nextY()};
    function isLeapYear (Year) {
        if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {
            return (true);
        } 
        else { 
            return (false); 
        }
    }
    function getDaysInMonth(month,year)  {
        var days;
        if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) 
            days=31;
        else if (month==4 || month==6 || month==9 || month==11) 
            days=30;
        else if (month==2)  {
            if (isLeapYear(year)) { 
                days=29; 
            }
            else { 
                days=28; 
            }
        }
        return (days);
    }
    function previousM(){
        var m  = monthnames[thisid.month - 1];
        if (thisid.month==0){
            m= monthnames[thisid.month+11];
            thisid.year=thisid.year-1;
        }
        var date = m + " " + thisid.day + ", " + thisid.year;   
        thisid.render(new Date(date));
    }
    function nextM(){
        var m  = monthnames[thisid.month + 1];
        if (thisid.month==11){
            m= monthnames[thisid.month-11];
            thisid.year=thisid.year+1;
        }
        var date = m + " " + thisid.day + ", " + thisid.year;      
        thisid.render(new Date(date));
    }
    function previousY(){
        y = thisid.year-1;
        m = thisid.month+1;
        var date = m + " " + thisid.day + ", " + y; 
        thisid.render(new Date(date));
    }
    function nextY(){
        y = thisid.year+1;
        m = thisid.month+1;
        var date = m + " " + thisid.day + ", " + y;   
        thisid.render(new Date(date));
    }
}    


    

    // var calendar = new Calendar("div1");
    // calendar.render(new Date("July 4, 1776"));

window.onload=function() {
    
    var calendar2 = new Calendar("div2");
    calendar2.render(new Date("October 17, 1992"));

    var calendar1 = new Calendar("div1");
    calendar1.render(new Date("July 15, 2014"));
}