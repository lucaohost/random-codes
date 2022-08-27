/**
 * float currentNumber
 * float percent
 * string higherOrLower must be 'higher' or 'lower'
 * int precision must be between 0 and 100 otherwise 
 * it will generate a RangeError in toFixed function 
 */
function originalNumberBeforePercent(currentNumber, percent, higherOrLower, precision) {
    if (higherOrLower === "higher") {
        return (currentNumber/((1 + (percent/100)))).toFixed(precision);
    }
    return (currentNumber/((1 - (percent/100)))).toFixed(precision);
}

/*
Example: 355 is 18% higher than the original number, what is the original number?
I made the next logic:

355 = x * (100% + 18%)
355 = x * (118%)
355 = x * (118/100)
355/(118/100) = x
x = 355/(118/100)
x = 300.85

Replacing x:
355 = 300.85 * (100% + 18%)
355 = 300.85 * (118%)
355 = 300.85 * (118/100)
355 = 300.85 * 1.18
355 = 355
Correct

So let's create a formula to put in the funcion

currentNumber = originalPrice * (100% + (percent/100));
currentNumber = originalPrice * ((100/100) + (percent/100));
currentNumber = originalPrice * (1 + (percent/100));
currentNumber/((1 + (percent/100)) = originalPrice;
originalPrice = currentNumber/((1 + (percent/100));
*/
