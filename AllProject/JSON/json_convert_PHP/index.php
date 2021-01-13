<?php

// $json = '["html", "CSS"]';

// var_dump($json);

// echo "<br>";

// $phparray = json_decode($json); this will remove '' from $json

// var_dump($phparray)

$phparray = ["html", "CSS"];

var_dump($phparray);

echo "<br>";

$json = json_encode($phparray); // this will add '' to $phparray

var_dump($json)