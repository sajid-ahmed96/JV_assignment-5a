function getValue_1() {
    var inputText_1 = document.getElementById('text-1')
    var valueText_1 = document.getElementById('value-1')
    var a = inputText_1.value
    if (a == "") {
        valueText_1.innerHTML = "Please enter your first name"
    }
    else {
        valueText_1.innerHTML = a
    }
}
function getValue_2() {
    var inputText_2 = document.getElementById('text-2')
    var valueText_2 = document.getElementById('value-2')
    var b = inputText_2.value
    if (b == "") {
        valueText_2.innerHTML = "Please enter your last name"
    }
    else {
        valueText_2.innerHTML = b
    }
}
function getValue_3() {
    var inputText_3 = document.getElementById('text-3')
    var valueText_3 = document.getElementById('value-3')
    var c = inputText_3.value
    if (c == "") {
        valueText_3.innerHTML = "Please enter your E-mail Address"
    }
    else {
        valueText_3.innerHTML = c
    }
}
function getValue_4() {
    var inputText_4 = document.getElementById('text-4')
    var valueText_4 = document.getElementById('value-4')
    var d = inputText_4.value
    if (d == "") {
        valueText_4.innerHTML = "Please enter your Password"
    }
    else {
        valueText_4.innerHTML = d
    }
}
function getValue_5() {
    var inputText_5 = document.getElementById('text-5')
    var valueText_5 = document.getElementById('value-5')
    var e = inputText_5.value
    if (e == "") {
        valueText_5.innerHTML = "Please enter your contact number"
    }
    else {
        valueText_5.innerHTML = e
    }
}
function getValue_6() {
    var inputText_6 = document.getElementById('text-6')
    var valueText_6 = document.getElementById('value-6')
    var f = inputText_6.value
    if (f == "") {
        valueText_6.innerHTML = "Please enter your CNIC number"
    }
    else {
        valueText_6.innerHTML = f
    }
}