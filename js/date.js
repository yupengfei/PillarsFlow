function getDateString(date) {
    return date.toLocaleDateString();
}

function getMonthAndDateString(date) {
    return date.getMonth().toString() + date.getDay().toString()
}

function getToday() {
    var date = new Date();
    return date;
}



