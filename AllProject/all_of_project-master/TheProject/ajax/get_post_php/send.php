<?php
	
	// if(isset($_GET['name'] && $_GET['age'])) {
	// 	echo "Hello " . $_GET['name'] . " My Age Is" . $_GET['age'];
	// }

	if(isset($_POST['name'] && $_POST['age'])) {
		echo "Hello " . $_POST['name'] . " My Age Is" . $_POST['age'];
	}