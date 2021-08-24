var inputStartDay = prompt("시작일을 입력해주세요.", "2020-01-01");    
var inputpassedday = prompt("지난 날짜를 입력해주세요. ex) 120일 ");     


var today = new Date();
var startDay = new Date(inputStartDay);
var year = startDay.getFullYear();
var month = startDay.getMonth() + 1;    
var day = startDay.getDate();
document.querySelector("#startDay").innerHTML = year + "년 " + month + "월 " + day + "일 기준";      

var startMilli = startDay.getTime();
var todayMilli = today.getTime();
var calcDay = 24 * 60 * 60 * 1000;  
var passedDay = Math.round((todayMilli - startMilli) / calcDay);
document.querySelector("#today").innerHTML = "<h3>" + passedDay + "일 지남</h3>";      

calcDate(100);
calcDate(200);
calcDate(300);
calcDatecustum(inputpassedday);


function calcDate(number){
    var futureMilli = startMilli + (calcDay * number); 
    var dDay = Math.round((futureMilli - todayMilli) / calcDay);
    if(number == 365){  
        year = startDay.getFullYear() + 1;
        month = startDay.getMonth() + 1;
        day = startDay.getDate();
    }
    else{
        var futureDate = new Date(futureMilli);
        year = futureDate.getFullYear();
        month = futureDate.getMonth() + 1;
        day = futureDate.getDate();
    }
    console.log(dDay);

    if(dDay<0){
        document.querySelector("#dday" + number).innerHTML = -dDay + "일 지남<br>" + year + "년 " + month + "월 " + day + "일";  
    }
    else if(dDay>0){
        document.querySelector("#dday" + number).innerHTML = dDay + "일 남음<br>" + year + "년 " + month + "월 " + day + "일";     
    }
}

function calcDatecustum(number){
    var futureMilli = startMilli + (calcDay * number); 
    var dDay = Math.round((futureMilli - todayMilli) / calcDay);
    if(number == 365){  
        year = startDay.getFullYear() + 1;
        month = startDay.getMonth() + 1;
        day = startDay.getDate();
    }else{
        var futureDate = new Date(futureMilli);
        year = futureDate.getFullYear();
        month = futureDate.getMonth() + 1;
        day = futureDate.getDate();
    }
    document.querySelector("#ddaycustum").innerHTML =inputpassedday + "일";     

    if(dDay<0){
        document.querySelector("#dday365").innerHTML = -dDay + "일 지남<br>" + year + "년 " + month + "월 " + day + "일";      
    }
    else if(dDay>0){
        document.querySelector("#dday365").innerHTML = dDay + "일 남음<br>" + year + "년 " + month + "월 " + day + "일";     
    }
   
}