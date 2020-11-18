<?php
    include('dbcon.php');
    $year = $_POST['year'];
    $dept = $_POST['dept'];
   
    mysqli_query($db,"TRUNCATE table view");
    $query1 = "INSERT into view(Fno,C_code,Slot,Year,Dept) SELECT Fno,C_code,Slot,Year,Dept from fac_course_slot";
    mysqli_query($db,$query1);
    $query2 = "INSERT into view(Fno,C_code,Slot,Year,Dept) SELECT DISTINCT(fc.Fno),fc.C_code,s.A_Tslot,fcs.Year,fcs.Dept from faculty f, fac_and_course fc, fac_course_slot fcs, theoryslots s WHERE fcs.C_code = fc.C_code and f.Fno = fc.Fno and fc.SlotType = 'A' and s.Tslot = fcs.Slot";
    mysqli_query($db,$query2);
    
    $query = mysqli_query($db,"SELECT k.Fno,Fname,k.C_code,Cname,Slot FROM view k, faculty f,course c where Year= '$year' and Dept='$dept' and k.Fno = f.FNo and k.C_code = c.C_code order by Slot");
    $array = array();

    // look through query
    while($row = mysqli_fetch_assoc($query))
    {
        $array[] = $row;
    }
    echo json_encode($array);
    mysqli_query($db,"TRUNCATE view");

?>

