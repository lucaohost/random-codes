function subDate(dbDate1, dbDate2) {
    return Math.floor((new Date(dbDate1) - new Date(dbDate2)) / 86400000);
}

function subDateExplained(dbDate1, dbDate2) {
    let date1InMiliseconds = new Date(dbDate1);
    let date2InMiliseconds = new Date(dbDate2);
    let differenceInMiliseconds = date1InMiliseconds - date2InMiliseconds;
    const milisecondsInOneDay = 86400000;
    let differenceInDays = differenceInMiliseconds / milisecondsInOneDay;
    let differenceInCompletedDays = Math.floor(differenceInDays);
    return differenceInCompletedDays;
}