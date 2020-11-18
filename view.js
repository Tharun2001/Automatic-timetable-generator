function func(yr,dpt)
{
        var cse_course = new Array();
        $.ajax({
                type: 'POST',
                url: "view.php",
                data: { year: yr, dept: dpt},
                success: function(data){
                        cse_course = JSON.parse(data); 
                },
                async: false
                });
        console.log(cse_course);
        var text = `<table id="timetable">
                <tr>
                <th>Faculty No</th>
                <th>Faculty Name</th> 
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Slot</th>
                </tr>`;
        for(var i=0; i<cse_course.length;i++)
        {
                text = text + ` <tr>
                <td >`+cse_course[i].Fno+`</td>
                <td >`+cse_course[i].Fname+`</td> 
                <td >`+cse_course[i].C_code+`</td>
                <td >`+cse_course[i].Cname+`</td>
                <td>`+cse_course[i].Slot+`</td>
                </tr>`;
        }
        text = text + ` </table>`;
        console.log(text);
        document.getElementById("demo").innerHTML =text;
}
function CreateNew()
{
        $.ajax({
                type: 'POST',
                url: "truncate.php",
                success: function(){
                        console.log(success); 
                },
                async: false
                });

        location.href = 'index.html';
}
function Back()
{
        location.href = 'index.html';       
}
/*var c_code = [];
var cname = [];
var slot = [];
var ar = [];
var arr = [];
var fno = [];
var fname = [];
j=0
for(var i=0; i<cse_course.length;i++)
{
        console.log(cse_course[i].C_code);
        if(i==0)
        {
                c_code[j]=cse_course[i].C_code;
                cname[j] =cse_course[i].Cname;
                slot[j] = cse_course[i].Slot     
                j++;
                ar.push(cse_course[i].Fno);
                arr.push(cse_course[i].Fname);
        }
        else
        {     if(cse_course[i].C_code == c_code[j-1])
                {
                        ar.push(cse_course[i].Fno);
                        arr.push(cse_course[i].Fname);
                }
                else
                {
                        c_code[j]=cse_course[i].C_code;
                        cname[j] =cse_course[i].Cname;
                        slot[j] = cse_course[i].Slot
                        j++;
                        fno.push(ar);
                        fname.push(arr);
                        ar = [];
                        arr = []
                        ar.push(cse_course[i].Fno);
                        arr.push(cse_course[i].Fname);
                }

        }
}
fno.push(ar);
fname.push(arr);
console.log(c_code);
console.log(fno);
console.log(slot);*/

