<?php

/*
 * Clean any nullable primitives propertiess, object properties and array properties 
 * of a object that can has infinity levels of objects/arrays inside
 *
 */

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