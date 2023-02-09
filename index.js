function validateForm() {
    var a = document.querySelectorAll('form')[0][0].value;
    var b = document.querySelectorAll('form')[0][1].value;
    var c = document.querySelectorAll('form')[0][2].value;
    var d = document.querySelectorAll('form')[0][3].value;
    console.log(a);
    if (a === null || a === "", b === null || b === "", c === null || c === "", d === null || d === "") {

        alert('Please enter required field');
    }
    else {
        alert("Check Your details -> " + "Name: " + a + " " + b + "  " + "Email: " + c);

    }
}