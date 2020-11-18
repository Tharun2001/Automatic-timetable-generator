var fac = new Array();
var course =new Array();
var facCourse =new Array();
function Fac()
{
    $.ajax({
        type: 'POST',
        url: "Faculty.php",
        success: function(data){
                fac = JSON.parse(data); 
        },
        async: false
        });
    var text = `<table class="timetable">
    <tr>
    <th>Faculty No</th>
    <th>Faculty Name</th> 
    </tr>`;
    for(var i=0; i<fac.length;i++)
    {
            text = text + ` <tr>
            <td >`+fac[i].Fno+`</td>
            <td >`+fac[i].Fname+`</td> 
            </tr>`;
    }
    text = text + ` </table><br><input type="text" id='facNo' placeholder="Faculty Number">
    <button type="button" onclick="Delfac(document.getElementById('facNo').value)">Delete</button>` ;
    document.getElementById("demo").innerHTML =text;
}
function Course()
{
    $.ajax({
        type: 'POST',
        url: "Course.php",
        success: function(data){
                course = JSON.parse(data); 
        },
        async: false
        });
    var text = `<table class="timetable">
    <tr>
    <th>Course Code</th>
    <th>Course Name</th> 
    <th>No. of classes per week</th>
    <th>No. of labs per week</th>
    </tr>`;
    for(var i=0; i<course.length;i++)
    {
            text = text + ` <tr>
            <td >`+course[i].C_code+`</td>
            <td >`+course[i].Cname+`</td> 
            <td>`+course[i].No_of_classes+`</td>
            <td>`+course[i].No_of_Labs+`</td>
            </tr>`;
    }
    text = text + ` </table><br><input type="text" id='Cno' placeholder="Course Number">
    <button type="button" onclick="Delcourse(document.getElementById('Cno').value)">Delete</button>` ;
    document.getElementById("demo").innerHTML =text;
    
}

function FacCourse()
{
    $.ajax({
        type: 'POST',
        url: "FacCourse.php",
        success: function(data){
                facCourse = JSON.parse(data); 
        },
        async: false
        });
    var text = `<table class="timetable">
    <tr>
    <th>Faculty Number</th>
    <th>Faculty Name</th>
    <th>Course Number</th>
    <th>Course Name</th>
    <th>Slot Type</th>
    </tr>`;
    for(var i=0; i<facCourse.length;i++)
    {
            text = text + ` <tr>
            <td >`+facCourse[i].Fno+`</td>
            <td >`+facCourse[i].Fname+`</td> 
            <td>`+facCourse[i].C_code+`</td>
            <td>`+facCourse[i].Cname+`</td>
            <td>`+facCourse[i].SlotType+`</td>
            </tr>`;
    }
    text = text + ` </table><br><input type="text" id='fno' placeholder="Faculty Number">
    <input type="text" id='Cno' placeholder="Course Number">
    <select id="Slot">
    <option value="">--Select an option--</option>
    <option value='M'>M</option>
    <option value='A'>A</option>
    </select>
    <button type="button" onclick="DelfacCourse(document.getElementById('fno').value, document.getElementById('Cno').value, document.getElementById('Slot').value )">Delete</button>` ;
    document.getElementById("demo").innerHTML =text;
}

function DelfacCourse(fno,Cno,Slot)
{
    var msg;
    $.ajax({
        type: 'POST',
        url: "DelFacCourse.php",
        data:{fno: fno, Cno: Cno, Slot: Slot},
        success: function(data){
               msg = data;
        },
        async: false
        });
    console.log(msg);
    FacCourse();
}

function Delfac(fno)
{
    var msg;
    $.ajax({
        type: 'POST',
        url: "DelFaculty.php",
        data:{fno: fno},
        success: function(data){
               msg = data;
        },
        async: false
        });
    console.log(msg);
    Fac();
}

function Delcourse(Cno)
{
    var msg;
    $.ajax({
        type: 'POST',
        url: "DelCourse.php",
        data:{Cno: Cno},
        success: function(data){
               msg = data;
        },
        async: false
        });
    console.log(msg);
    Course();
}