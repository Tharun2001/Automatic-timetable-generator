<?php
    include('../dbcon.php');
    $sql = 'select * from course';
    $array = array();
    $query= mysqli_query($db,$sql);
    while($row = mysqli_fetch_assoc($query))
    {
        $array[] = $row;
    }
    echo json_encode($array);
?>