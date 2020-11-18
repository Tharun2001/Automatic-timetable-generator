<?php
    include('../dbcon.php');
   $c_code = $_POST['c_code'];
   $slot = $_POST['slot'];
   $fac = $_POST['fac'];
   $year = $_POST['year'];
   $dept = $_POST['dept'];
   //$year = $_POST['year'];
   //$dept = $_POST['dept'];

   //$sql = `insert into fac_course_slot(Fno,C_code,Slot,Year,Dept) values($fac, $c_code, $slot,1,"CSE")` ;
   $sql = "INSERT INTO fac_course_slot(Fno,C_code,Slot,Year,Dept) VALUES('$fac','$c_code', '$slot','$year','$dept')" ;

  
   
   if(mysqli_query($db,$sql))
   {
       echo "Inserted";
   }
   else
   {
       echo "failed";
   }
?>