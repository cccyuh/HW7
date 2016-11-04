function showMsg(msg1, msg2) {
    var msgAll = msg1 + msg2;
    return msgAll;
    alert("我不會執行");
}

function random(m) {
    console.log(m);
    return Math.floor(Math.random() * m + 1);
}

function max(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

function lastChar(arr) {
    return arr[arr.length - 1]
}

function squares(a, b) {
    var squares = a * a + b * b;
    return squares;
}

function leapYear(y) {
    if (y % 4 === 0 && y % 100 != 0 || y % 400 === 0) {
        return "yes"
    } else {
        return "no"
    }
}