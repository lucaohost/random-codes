let salary = 1000;
let homeOfficeAssist = 100;
let foodVoucher = 100;
let salary13 = salary;
let profitSharing = salary;
let fgts = 100;
let extraVacations = (1/3) * salary;
let totalCompensation = (12 * salary) + (12 * fgts) + (foodVoucher * 12) + salary13 + profitSharing + (homeOfficeAssist * 12) + extraVacations;
console.log("Total Compensation: ", Math.round(totalCompensation, 2), " Average per month: ", Math.round(totalCompensation/12, 2));
