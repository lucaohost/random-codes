<?php 

function getCombinations($prefix, $chars) {
    $combinations= [];
    for ($i = 0; $i < count($chars); $i++) {
        $combinations[] = $prefix . $chars[$i];
        $combinations= array_merge($combinations, getCombinations($prefix . $chars[$i], array_slice($chars, $i + 1)));
    }
    return $combinations;
}

$combinations = getCombinations('', ['L','U', 'C', 'A', 'S']);
print_r($combinations);

// pattern: when the elements are incresed in one, the number of combinations will duplicate and added 2.
// example: 4 letters haves 14 combinations, while 5 letters will have 30 combinations ((14*2)+2) ...
