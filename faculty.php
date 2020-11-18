<?php
    include('dbcon.php');
    $var1 = $_POST['c_code'];
    $sql = "SELECT Fno from fac_and_course WHERE C_code = '$var1' and SlotType = 'M'" ;
    
    $array = array();
    $query= mysqli_query($db,$sql);
    while($row = mysqli_fetch_assoc($query))
    {
        $array[] = $row;
    }
    echo json_encode($array);
?>