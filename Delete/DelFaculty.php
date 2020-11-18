<?php
    include('../dbcon.php');
    $fno = $_POST['fno'];
    $sql1 = "delete from faculty where Fno='$fno'";
    $sql2 = "delete from fac_and_course where Fno='$fno'";
    if( mysqli_query($db,$sql2) && mysqli_query($db,$sql1)  )
    {
        echo 'Success';
    }
    else
    {
        echo 'Fail';
    }
?>
 