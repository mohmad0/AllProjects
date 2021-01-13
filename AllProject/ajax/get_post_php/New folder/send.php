<?php
	
	if(isset($_GET['name'] && $_GET['age'])) {
		echo "Hello " . $_GET['name'] . " My Age Is" . $_GET['age'];
	}