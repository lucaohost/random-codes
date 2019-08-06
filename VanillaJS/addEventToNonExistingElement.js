/*
 * I haven no idea if this is a good practice, but works.
 * Basically, if you will add a element with id = myId for 
 * example, that isn't present in your html in the first load of js,
 * the element will not get the event correctly. Those lines of code, solve that. 
 */

 document.addEventListener("click", function(){
 	if(event.target.id == "myId"){
 		alert("Do something here");
 	}
 });