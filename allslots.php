<?php
    include('dbcon.php');
    $num = $_POST['num'];
    
    $sql = "SELECT * FROM theoryslots where No_of_classes= $num";
    $query = mysqli_query($db,$sql);
    $array = array();

    // look through query
    while($row = mysqli_fetch_assoc($query))
    {
        $array[] = $row['Tslot'];
    }
    echo json_encode($array);

?>
