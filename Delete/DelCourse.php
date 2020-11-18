<?php
    include('../dbcon.php');
    $Cno = $_POST['Cno'];
    $sql1 = "delete from course where C_code='$Cno'";
    $sql2 = "delete from fac_and_course where C_code='$Cno'";
    if( mysqli_query($db,$sql2) && mysqli_query($db,$sql1)  )
    {
        echo 'Success';
    }
    else
    {
        echo 'Fail';
    }
?>