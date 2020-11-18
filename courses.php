<?php
    include('dbcon.php');
    $query = mysqli_query($db,"SELECT * FROM course");
    $array = array();

    // look through query
    while($row = mysqli_fetch_assoc($query))
    {
        $array[] = $row;
    }
    echo json_encode($array);

?>
