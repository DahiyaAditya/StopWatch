let startTime; 
let intervalID;

const start = ()=>{
    startTime = Date.now();
    intervalID = setInterval(stopWatch, 10);
}
// here is the method 1
// here method we use Date.now in which it give exact time
// when we click buuton it give that time in startTime
// as it enter updateStopTime it give new time
// and every time setinterval run currentTime will update not start time
// so its difference will give us our stop watch time.
const updateStopTime = ()=>{
    const currentTime = Date.now(); 
    const elapsedTime = currentTime - startTime; 
    let seconds = Math.floor(elapsedTime  / 1000);
    let minutes = Math.floor(seconds/ 60);
    let hours = Math.floor(minutes/3600000)
    
    minutes = minutes % 60;
    seconds = seconds % 60;

    const formattedTimeHours = `${pad(hours)}`;
    const formattedTimeMin = `${pad(minutes)}`;
    let formattedTimeSec = `${pad(seconds)}`;
    document.getElementById('hrs').innerHTML=formattedTimeHours;
    document.getElementById('min').innerHTML=formattedTimeMin;
    document.getElementById('sec').innerHTML=formattedTimeSec;
}

// the only difference between method1 and 2 is when we pause in 
// method 1 and we start it again it will start with 00:00:00
// but in method 2 it will start at what time we pause it

// this is done by method 2
// here in method 2 we use if else only 
let count =0;
let second =0;
let minute =0;
let hour =0;
const  stopWatch = ()=> {
    
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        document.getElementById('hrs').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
    
}
const Stop= ()=>{
    clearInterval(intervalID);
    console.log('yes')
}
const Reset = ()=>{
    hour = 0;
    minute = 0;
    second = 0;
    clearInterval(intervalID);
    document.getElementById('hrs').innerHTML ="00";
    document.getElementById('min').innerHTML ="00";
    document.getElementById('sec').innerHTML ="00";
}
// add a leading zero to anumber if its less then 10
const pad = (number)=>{
    return number < 10? '0' + number : number 
}