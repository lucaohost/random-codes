// myDate string | e.g: "2018-06-05"
function getDmyOfDbDate(myDate) {
    return new Date(myDate + "T00:00:00").toLocaleDateString('en-GB');
}
