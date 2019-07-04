<?php
function removeValueFromArray(&$array, $value, $allThem = false, $strongComparission = true){
	foreach($array as $key => $valueArray){
		$comparission = $strongComparission ? $valueArray === $value : $valueArray == $value;
		if($comparission){
			unset($array[$key]);
			if(!$allThem){
				break;	
			}
		}
	}
	if(!empty($array)){
			$array = array_values($array);
	}
}