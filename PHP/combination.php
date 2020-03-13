
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

