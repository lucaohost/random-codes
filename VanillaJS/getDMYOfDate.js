/*
 *myDate can assume two things:
 *1.When you pass true in the second parameter, myDate i'ts considered a class 
 *of elements that have dates which need to be formated.
 *2.When you dont pass the second parameter, myDate i'ts considered the date 
 *which need to be formated
 *The first if try to capture dates informed like 12-31-1969 and add time
 *The firts else if try to capture dates informed like 12-31-1969 01:01:01
 */

function getDMYOfDate(myDate, itsAClass = false){
	if(new RegExp(/([0-9]*)+-+([0-9]*)+-+([0-9]*)$/).test(myDate)){
		myDate += "00:00:00";
	}
	else if(new RegExp(/([0-9]*)+-+([0-9]*)+-+([0-9]*)+[ ]+([0-9]*)+:+([0-9]*)+:+([0-9]*)$/).test(myDate)){
		myDate = myDate;
	}

    if(itsAClass){
        var obj = document.getElementsByClassName(myDate);
        for (var prop in obj) {
          obj[prop].innerHTML = new Date(obj[prop].innerHTML).toLocaleDateString('en-GB');
        }
    }else{
        return new Date(myDate).toLocaleDateString('en-GB');
    }
}
