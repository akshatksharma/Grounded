<?php

    //all this script does right now is read in the form data and then return a success
    //header("Access-Control-Allow-Origin: *");
    //header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
	header('Content-Type: application/json');
	//require 'database.php';

	//get user-submitted data from json
	$json_str = file_get_contents('php://input');
    $json_obj = json_decode($json_str, true);

    $name = $json_obj["name"];
    $email = $json_obj["email"];

    echo json_encode(array(
		"success" => true,
        "name" => $name,
        "email" => $email
	));

	/*
	$json_obj = json_decode($json_str, true);
	$email = $mysqli -> real_escape_string($json_obj['email']);
	$picture_file = $json_obj['picture'];
	$audio_file = $json_obj['audio'];
	$isAnonymous = $json_obj['isAnonymous'];

	$code = '';

	//prepare mySQL statement and bind variables
	$stmt = $mysqli->prepare("insert into submission (email, picture, audio, isAnonymous, code) values (?, ?, ?, ?, ?)");
	if(!$stmt){
		echo json_encode(array(
		"success" => false,
		"message" => $mysqli->error
		));
		exit;
	}

	$stmt->bind_param('sssss', $email, $picture_file, $audio_file, $isAnonymous, $code);
	$stmt->execute();
	$stmt->close();
	*/
	exit;
?>