<?php
	
	// if(isset($_POST['name'] && $_POST['age'])) {
	// 	echo "Hello " . $_POST['name'] . " My Age Is" . $_POST['age'];
	// }

	// // if(isset($_GET['name'] && $_GET['age'])) {
	// // 	echo "Hello " . $_GET['name'] . " My Age Is" . $_GET['age'];
	// // }

	$comments = array("Thanks" , "Thank You " , " Good" , "MOhamd", "Ail");

	if(isset($_POST['comments'])){
		array_push($comments, $_POST['comments']);
	}

	foreach ($comments as $com ) {
		echo $com . "<br>";
	}