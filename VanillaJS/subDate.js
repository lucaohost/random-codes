function subDate(dbDate1, dbDate2) {
    return Math.floor((new Date(dbDate1 + "T00:00:00") - new Date(dbDate2 + "T00:00:00")) / 86400000);
}
