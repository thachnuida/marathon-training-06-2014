// function TableScan(id,str){
//     this.id=id;
//     this.str=str;
// }
var sumColumn=function(){
    var idTableValue=document.getElementById("idTable").value,
        stringValue=document.getElementById("string").value;
    var stCheck="";
        sum=0;
    var tb=document.getElementById(idTableValue);
    var x = document.getElementById("form");
    var text ="" ;

    if (tb==null){
        text+="The id of table isn't True! Please input again";
    }
    else {
        n = tb.rows.length;
        console.log(stringValue+"SSS");
        for (var r = 0; r < 1; r++) {
            for (var c = 0, m = tb.rows[r].cells.length; c < m; c++) {
                stCheck=(tb.rows[r].cells[c].innerHTML);
                if (stringValue==stCheck) {
                    var cell=c;
                }   
            }
        }
        for (var r = 1; r < n; r++) {
            for (var c = 0, m = tb.rows[r].cells.length; c < m; c++) {   
                if (c==cell) {
                    // console.log(isNaN(tb.rows[r].cells[c].innerHTML));
                    if (isNaN(tb.rows[r].cells[c].innerHTML)||(tb.rows[r].cells[c].innerHTML)==""){
                        sum+=0;
                    }
                    else{         
                        sum+=parseFloat((tb.rows[r].cells[c].innerHTML));
                    }
                }   
            }
        }  
    text+="Column "+cell+" in id of table: " +idTableValue+" sums to "+sum;    
    }
    document.getElementById("p").innerHTML = text;
}
// window.onload=function() {
//     var tableScan= new TableScan();
//     tableScan.sumColumn("table1","adad");
// }