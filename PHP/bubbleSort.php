<?php

function bubbleSort($array)
{
    $numElementsToIterate = count($array) - 1;
    do {
        $hasSwapped = false;
        for ($key = 0; $key < $numElementsToIterate; $key++) {
            if ($array[$key] > $array[$key + 1]) {
                $hasSwapped = true;
                $actualElement = $array[$key];
                $array[$key] = $array[$key + 1];
                $array[$key + 1] = $actualElement;
            }
        }
    } while ($hasSwapped);
    return $array;
}

var_dump(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
var_dump(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
var_dump(bubbleSort([2, 3, 1, 5, 4, 8, 9, 6, 7]));
var_dump(bubbleSort([102, 1009, 5, 232, 13, 12, 33, 77, 9]));
var_dump(bubbleSort([12, 33, 51, 56, 48, 98, 119, 346, 98717]));
var_dump(bubbleSort([2333, 43, 21, 55, 6644, 1238, 92, 62, 71]));
var_dump(bubbleSort([210, 371, 123, 866, 455, 866, 911, 623, 371]));
