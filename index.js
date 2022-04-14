console.log("working");
let elements = document.getElementById("text");
console.log(elements);
let h1 = document.getElementsByTagName("h1");
console.log(h1);
let box1 =  document.getElementsByClassName("box");
console.log(box1);
let changetext = document.getElementById("text1");
changetext.innerText = "Hello World";
console.log(changetext);
function changeDirection(){
    const direction = document.getElementsByClassName("container");
    direction[0].style.flexDirection = "column";
    console.log(direction);
}
function heading(){
    const changecolor = document.getElementById("changecolor");
    changecolor.style.color = "red";
    console.log(changecolor);
}
function replacetext(){
    const a = document.getElementById("RT");
    a.innerText = "Welcome to Elevation Academy";
    console.log(a);
}
function time(){
    var hrs = document.getElementById("hours");
    var minu = document.getElementById("minutes");
    var sec = document.getElementById("second");
    var am_pm = document.getElementById("ampm");

    var time = new Date();

    var hrs=time.getHours()
    var minu = time.getMinutes()
    var sec=time.getSeconds()
    var am_pm = "AM";
if(hrs>12){
    am_pm = "PM";
}else{
    am_pm = "AM"
}
if(sec<10){
    sec = "0"+sec;
}

if(minu<10){
    minu = "0"+ minu;
}

if(hrs<10){
    hrs = "0"+ hrs;
}
if(hrs==0){
    hrs=12;
}
    hours.innerText = hrs;
    minutes.innerText = minu;
    second.innerText = sec;
    ampm.innerText = am_pm;

}time();
var onesecond = 1000;
setInterval(time,onesecond);
