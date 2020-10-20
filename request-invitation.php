<?php 

    $servername = "174.136.37.109";
    $username = "pielusaf_aaron";
    $password = "AaronRam24";
    $dbname = "pielusaf_sitio_boda";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) die("Connection failed: " . $conn->connect_error); 

    try {
        $conn->query("SET NAMES 'utf8';");
        $prepared = $conn->prepare("INSERT INTO sb_invitados(nombreCompleto,telefono,numeroInvitados,correoElectronico,comentarios) VALUES(?, ?, ?, ?, ?)");
        $prepared->bind_param("sssss", $fullName, $phone, $guestNumber, $email, $comments);

        $fullName = $_POST["fullName"]; 
        $phone = $_POST["phone"]; 
        $email = $_POST["email"]; 
        $guestNumber = $_POST["guestNumber"]; 
        $comments = $_POST["comments"]; 

        $prepared->execute();
        $prepared->close();

        $conn->close();
        echo "Todo bien :D";
    } catch (\Throwable $th) {
        var_dump($th);
        die("Falló algo :c");
    }

    

