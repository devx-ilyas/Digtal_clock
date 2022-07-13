

function showTime(){
    var date = new Date();
    var cDate = date.getDate();
    var mon = date.getMonth();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var d = date.getDay();
    console.log(mon);

    document.getElementById("cDate").innerHTML=cDate;
    switch (mon) {
        case 0:
          document.getElementById("M").innerHTML= "January";
          break;
        case 1:
            document.getElementById("M").innerHTML= "Febrary";
          break;
        case 2:
            document.getElementById("M").innerHTML= "march";
          break;
        case 3:
            document.getElementById("M").innerHTML= "April";
          break;
        case 4:
            document.getElementById("M").innerHTML= "may";
          break;
        case 5:
            document.getElementById("M").innerHTML= "June";
            console.log("working");
          break;
        case 6:
            document.getElementById("M").innerHTML= "July";
            break;
        case 7:
            document.getElementById("M").innerHTML= "August";
            break;
        case 8:
            document.getElementById("M").innerHTML= "September";
            break;
        case 9:
             document.getElementById("M").innerHTML= "October";
             break;
        case 10:
            document.getElementById("M").innerHTML= "November";
            break;
        case 11:
            document.getElementById("M").innerHTML= "December";
            break;
        default:
            alert("invalid month");
    
      }
    
      document.getElementById("hr").innerHTML=h;
      document.getElementById("min").innerHTML=m;
      document.getElementById("sec").innerHTML=s;

      switch (d) {
        case 0:
          document.getElementById("sun").style.border="5px solid #d107fa";
          sun.style.color="#d107fa";
          break;
        case 1:
          document.getElementById("mon").style.border="5px solid #d107fa";
          mon.style.color="#d107fa";
          break;
        case 2:
            document.getElementById("tues").style.border="5px solid #d107fa";
            tues.style.color="#d107fa";
          break;
        case 3:
          document.getElementById("wed").style.border="5px solid #d107fa";
          wed.style.color="#d107fa";
          break;
        case 4:
          document.getElementById("thur").style.border="5px solid #d107fa";
          thur.style.color="#d107fa";
          break;
        case 5:
          document.getElementById("fri").style.border="5px solid #d107fa";
          fri.style.color="#d107fa";
          break;
        case 6:
          document.getElementById("sat").style.border="5px solid #d107fa";
          sat.style.color="#d107fa";
            break;
      }
}

var time = setInterval(showTime, 1000);
