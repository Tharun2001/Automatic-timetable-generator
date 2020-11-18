
var fac = new Array();
var course = new Array();
function populatefac() {
    // THE JSON ARRAY.
    
    $.ajax({
        type: 'POST',
        url: "fno.php",
        success: function(data){
                fac = JSON.parse(data);
        },
        async: false
        });
    var text = "";
    for (var i = 0; i < fac.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        text = text +
            '<option value="' + fac[i]['Fno'] + '">' + fac[i]['Fno'] + '</option>';
    }
    document.getElementById("fno").innerHTML = ` <option value="">-- Select Faculty Number--</option>`+text;
}




function populateCourse() {
   
    $.ajax({
        type: 'POST',
        url: "code.php",
        success: function(data){
                course = JSON.parse(data);
        },
        async: false
        });
    var text = "";
    for (var i = 0; i < course.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        text = text +
            '<option value="' + course[i]['C_code'] + '">' + course[i]['C_code'] + '</option>';
    }
    document.getElementById("code").innerHTML = ` <option value="">-- Select Course Number--</option>`+text;
    console.log(course);
}

function showFac(ele) {
    var msg = document.getElementById('msg1');
    var fname ="";
    
    for(var i=0; i<fac.length; i++)
    {
        if(fac[i]['Fno']== ele.options[ele.selectedIndex].text)
        {
            fname = fac[i]['Fname'];
        }
    }
    msg.innerHTML = 'Faculty number: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>Faculty name: <b>' + fname; 
}

function showCourse(ele) {
    var msg = document.getElementById('msg2');
    var cname ="";

    for(var i=0; i<course.length; i++)
    {
        if(course[i]['C_code'].includes(ele.options[ele.selectedIndex].text))
        {
            cname = course[i]['Cname'];
        }
    }
    msg.innerHTML = 'Course code: <b>' + ele.options[ele.selectedIndex].text + '</b> </br> Course name: <b>' + cname; 
}

populatefac();
populateCourse();

function Submit()
{
    document.getElementById('error').textContent="";
    document.getElementById('success').textContent="";
    var a = document.getElementById("fno");
    fno = a.options[a.selectedIndex].text;
    var b = document.getElementById("code");
    code = b.options[b.selectedIndex].text;
    var c = document.getElementById("SlotType");
    SlotType = c.options[c.selectedIndex].text;
    var res;
    if(fno =="-- Select Faculty Number--" || code=="-- Select Course Number--" || SlotType=="--Select an option--")
    {
        document.getElementById('error').textContent = "Invalid";
    }
    else
    {
        $.ajax({
            type: 'POST',
            url: "assign.php",
            data: { fno: fno, code: code, SlotType: SlotType},
            success: function(data){
                    res = data; 
            },
            async: false
            });
        if(res == 'Already exists')
        {   document.getElementById('error').textContent = res;
        }
        else
        {
            document.getElementById('success').textContent="Successfully Inserted";
            console.log(res);
        }
    }
}