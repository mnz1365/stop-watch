var second = 0;
var minute = 0;
var si = undefined;
var firstActive = false;
var stopActive = false

function mystart1() {

        firstActive = true;
        second = second + 1;
        if(second > 59) {
            second = 0;
            minute = minute + 1;
            console.log(minute);
        }
        document.getElementById('p1').innerHTML = `${minute}:${second}`;
    
}

function mystart() {
    if(firstActive == false) {
        si = setInterval(mystart1, 1000);
        
    }
};


function mystop() {
    if(firstActive == true) {
        clearInterval(si);
        firstActive = false;
        stopActive = true;
        document.getElementById("start").innerHTML = "resume"
    }
}

function myreset() {
    second = 0;
    minute = 0;
    clearInterval(si);
    document.getElementById("start").innerHTML = "start";
    document.getElementById('p1').innerHTML = `0${minute}:0${second}`;

}