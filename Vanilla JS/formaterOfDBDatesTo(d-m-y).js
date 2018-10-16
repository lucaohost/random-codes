<script>
/*
 *myVar can be two things:
 *1.When you pass true in the second parameter, myVar i'ts considered a class 
 *of elements that have dates which need to be formated.
 *2.When you dont pass the second parameter, myVar i'ts considered the date 
 *which need to be formated
 */

function formatDBToDMYDates(myVar, itsAClass = false){
    if(itsAClass){
        var obj = document.getElementsByClassName(myVar);
        for (var prop in obj) {
          obj[prop].innerHTML = new Date(obj[prop].innerHTML + " 00:00:00").toLocaleDateString('en-GB');
        }
    }else{
        return new Date(myVar + " 00:00:00").toLocaleDateString('en-GB');
    }
}

</script>
