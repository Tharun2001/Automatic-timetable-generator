<?php
    include('../dbcon.php');
    $fno = $_POST['fno'];
    $Cno = $_POST['Cno'];
    $slot = $_POST['Slot'];
    $sql = "delete from fac_and_course where Fno='$fno' and C_code='$Cno' and SlotType='$slot'";
    $array = array();
    if( mysqli_query($db,$sql))
    {
        echo 'Success';
    }
    else
    {
        echo 'Fail';
    }
?>
 