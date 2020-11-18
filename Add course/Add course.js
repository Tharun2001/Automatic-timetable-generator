function Submit()
{
    var code = document.getElementById("code").value;
    var cname = document.getElementById("cname").value;
    cname = cname.toLocaleUpperCase();
    code = code.toLocaleUpperCase();
    var numClass = document.getElementById("numClass").value;
    var numLab = document.getElementById("numLab").value;
    document.getElementById("error_code").textContent = "";
    document.getElementById("error_cname").textContent = "";
    document.getElementById("error_Class").textContent = "";
    document.getElementById("error_Lab").textContent = "";
    document.getElementById("Status").textContent = "";
    var res;
    if(code == "")
    {
        document.getElementById("error_code").textContent = "*Invalid";
    }


    else if(cname=="")
    {
        document.getElementById("error_cname").textContent = "*Invalid";
    }
    else if(numClass =="" || isNaN(numClass) )
    {
        document.getElementById("error_Class").textContent = "*Invalid";
    }
    else if(numLab =="" || isNaN(numLab) )
    {
        document.getElementById("error_Lab").textContent = "*Invalid";
    }
    else
    {
            //document.getElementById("error_fno").textContent = "";
            $.ajax({
                type: 'POST',
                url: "Add course.php",
                data: { code: code, cname: cname, numClass: numClass, numLab: numLab},
                success: function(data){
                        res = data; 
                },
                async: false
                });
            console.log(res);
            if(res =="Invalid")
            {
                document.getElementById("error_code").textContent = "*Already exists";
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