<?php
    include('../dbcon.php');
    $sql = 'SELECT fc.Fno, f.Fname, fc.C_code, C.Cname, fc.SlotType from fac_and_course fc, faculty f, course C where f.Fno = fc.Fno and fc.C_code=C.C_code order by C.Cname';
    $array = array();
    $query= mysqli_query($db,$sql);
    while($row = mysqli_fetch_assoc($query))
    {
        $array[] = $row;
    }
    echo json_encode($array);
?>