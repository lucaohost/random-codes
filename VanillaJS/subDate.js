function subDate(dbDate1, dbDate2) {
    let dateArray = dbDate1.split("-");
    // month is from 0 to 11
    date1 = new Date(parseInt(dateArray[0]), parseInt(dateArray[1]) -1, parseInt(dateArray[2]));
    let dateArray2 = dbDate2.split("-");
    date2 = new Date(parseInt(dateArray2[0]), parseInt(dateArray2[1]) -1, parseInt(dateArray2[2]));
    return Math.floor((date1 - date2) / 86400000);
}
