<?php
     
     include('../dbcon.php');
     $query = mysqli_query($db,"select * from course");
   
     $array = array();
 
     // look through query
     while($row = mysqli_fetch_assoc($query))
     {
         $array[] = $row;
     }
     echo json_encode($array);
?>