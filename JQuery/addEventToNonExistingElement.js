/*
 * I haven't no idea if this is a good practical, but works.
 * Basically, if you will add a element with id = myId for 
 * example, that isn't present in your html in the first load of js,
 * those lines of code, solve that. 
 */

$(document).on("click", "#myId", function(){
	alert("do something here!");
});

function cleanNullsOfObject(&$object) {
        foreach ($object as $property => &$value) {
            if (is_object($value)) {
                cleanNullsOfObject($value);
                if (empty(get_object_vars($value))) {
                    unset($object->$property);
                }
            }
            if (is_null($value) || (is_array($value) && empty($value))) {
                unset($object->$property);
            }
        }
    }
