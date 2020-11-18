<?php
    include('dbcon.php');
    $var1 = $_POST['fno'];
    $sql = "select * from fac_course_slot where Fno= '$var1' " ;
    
    $array = array();
    $query= mysqli_query($db,$sql);
    while($row = mysqli_fetch_assoc($query))
    {
        $array[] = $row['Slot'];
    }
    echo json_encode($array);
?>