<?php
    include('../dbcon.php');
    $fno = $_POST['fno'];
    $fname = $_POST['fname'];
    $query = mysqli_query($db,"select count(*) from faculty where Fno='$fno'");
    $row = mysqli_fetch_assoc($query);

    $no = $row['count(*)'];
    
    if($no!= 0)
    {
        echo "Invalid";
    }
    else
    {
        echo "Valid";
        $sql = "insert into faculty(Fno, Fname) values('$fno','$fname')";
        mysqli_query($db,$sql);
    }
?>
