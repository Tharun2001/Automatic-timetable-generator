<?php
    include('dbcon.php');
    $var1 = $_POST['course'];
    $sql = "select C_code, No_of_classes from course where Cname='$var1' ";
    
    $array = array();
    $query= mysqli_query($db,$sql);
    while($row = mysqli_fetch_assoc($query))
    {
        $array[] = $row;
    }   
    echo json_encode($array);

?>