<?php
    include('../dbcon.php');
    $code = $_POST['code'];
    $fno = $_POST['fno'];
    $slot = $_POST['SlotType'];
    $query = mysqli_query($db,"select count(*) from fac_and_course where Fno='$fno' and  C_code='$code' and SlotType='$slot'");
    $row = mysqli_fetch_assoc($query);

    $no = $row['count(*)'];

    if($no!=0)
    {
        echo "Already exists";
    }
    else
    {
        echo "Valid";
    
        $sql = "INSERT INTO `fac_and_course` (`PK`, `Fno`, `C_code`,`SlotType`) VALUES (NULL, '$fno', '$code','$slot');";
        if(mysqli_query($db,$sql))
        {
            echo 'success';
        }
        else
        {
            echo 'Not inserted';
        }
    }
?>