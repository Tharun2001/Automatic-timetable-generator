function Submit()
{
    var fno = document.getElementById("fno").value;
    var fname = document.getElementById("fname").value;
  
    document.getElementById("error_fno").textContent = "";
    document.getElementById("error_fname").textContent = "";
    document.getElementById("Status").textContent = "";
    var res;
    if(fno[0]!='F' || fno == "")
    {
        document.getElementById("error_fno").textContent = "*Invalid";
    }

    else if(fname=="")
    {
        document.getElementById("error_fname").textContent = "*Invalid";
    }
    else
    {
            document.getElementById("error_fno").textContent = "";
            $.ajax({
                type: 'POST',
                url: "Add Faculty.php",
                data: { fno: fno, fname: fname},
                success: function(data){
                        res = data; 
                },
                async: false
                });
            console.log(res);
            if(res =="Invalid")
            {
                document.getElementById("error_fno").textContent = "*Already exists";
            }
            else if(res == "Valid")
            {
                document.getElementById("Status").textContent = "Successfully Inserted";
                document.getElementById("Submit").disabled = true;
            }
    }
}

function Next()
{
    location.reload();
}