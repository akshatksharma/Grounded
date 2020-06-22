<?php
        header('Content-Type: application/json');
        //require 'database.php';

        //get user-submitted data from json
        $formData = file_get_contents('php://input');

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

        echo json_encode(array(
                "success" => true,
				"data" => $formData
        ));
        exit;
?>