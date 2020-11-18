<?php
    include('../dbcon.php');
    $code = $_POST['code'];
    $cname = $_POST['cname'];
    $numClass = $_POST['numClass'];
    $numLab = $_POST['numLab'];
    $query = mysqli_query($db,"select count(*) from Course where C_code='$code'");
    $row = mysqli_fetch_assoc($query);

    $no = $row['count(*)'];
    
    if($no!= 0)
    {
        echo "Invalid";
    }
    else
    {
        echo "Valid";
        $sql = "insert into course(Cname, C_code, No_of_classes, No_of_Labs) values('$cname','$code','$numClass','$numLab')";
        mysqli_query($db,$sql);
    }
?>
