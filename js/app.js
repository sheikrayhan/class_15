// calculateGrade
function welcome(){
    var username = document.getElementById('name').value
    document.getElementById('wlc').innerHTML='Welcome ' + username;

    if(username.length <= 5){
        document.getElementById('wlc').style.color='blue';
    }else if(username.length >= 10){
        document.getElementById('wlc').style.color='purple';
    }else{
        document.getElementById('wlc').style.color='orange'
    }
}

function calculateGrade() {
    var num = document.getElementById('input_value').value


    if (num >= 80 && num <= 100) {
        document.getElementById('result').innerText = "A+";
    }
    else if (num >= 70 && num <= 79) {
        document.getElementById('result').innerText = "A";
    }
    else if (num >= 60 && num <= 69) {
        document.getElementById('result').innerText = "A-";
    }
    else if (num >= 50 && num <= 59) {
        document.getElementById('result').innerText = "B";
    }
    else if (num >= 40 && num <= 49) {
        document.getElementById('result').innerText = "C";
    }
    else if (num >= 33 && num <= 39) {
        document.getElementById('result').innerText = "D";
    }
    else if (num >= 0 && num <= 32) {
        document.getElementById('result').innerText = "F";
    }
    else {
        alert("Eeeeeeeeeee Tui Ghuma Ja")
    }
    
}
// calculateGrade

// odd even 
function oddeven(){
    var user_num = document.getElementById('typeanum').value

    var user_rslt = document.getElementById('oddevenrslt');

    if(user_num % 2 == 0){
        user_rslt.innerText='This is a  Even  Number'
        user_rslt.style.color='#307B1C'
    }else{
        user_rslt.innerText='This is a Odd Number'
        user_rslt.style.color='#5D1C7B'
    }
}
// odd even 