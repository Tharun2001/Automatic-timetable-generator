var dept;
var year;
count=0;
var dept_course=new Array();

function no_sub()
{   document.getElementById('error').textContent="";
    dept=localStorage.getItem('dept');
    year=localStorage.getItem('year');

    var no_sub= document.getElementById("no_sub").value;
    if(no_sub.length>0)
    {
        var text="";
        for(var i=1; i <= no_sub; i++)
        {
            text += `<br><label for="Sub_`+i+`">Subject `+ i +`:</label>
            <input type="text" class="Subs" id= "Sub_`+i+`">
            <br><br>`;
        }
        text = `<div class="Subjects">` + text + `<button type="button" class=button onclick="Submit(`+no_sub+`)">Submit</button></div>`;
        
        document.getElementById("demo").innerHTML = text;
        var ourRequest = new XMLHttpRequest();
        ourRequest.open("GET","../courses.php",true);
        ourRequest.send();
        var cname = new Array;
        var data;
        ourRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText);
                for(var i=0;i<data.length;i++)
                {
                    cname[i]=data[i].Cname;
                }    
                
                $(document).ready(function(){
                    $('.Subs').typeahead({
                    source: cname
                })
                });
            }
        }
    }
    else
    {
        alert('Invalid');
    }
}
function Submit(no)
{   document.getElementById('error').textContent=""
    var check=0;
    for(var j=1; j<= no; j++)
    {
        if(document.getElementById("Sub_"+j).value.length<=0)
        {
            check = 1;
        }
    }
    var flag = 0;
    if(check!=1)
    {
        for(var j=1; j<= no; j++)
        {
            dept_course[j-1]= document.getElementById("Sub_"+j).value;
        }
        for(var i=0;i<dept_course.length;i++)
        {
            for(var j=i+1;j<dept_course.length;j++)
            {
                if(dept_course[i]==dept_course[j])
                {
                    flag = 1; break;
                }
            }
            if(flag==1)
            {
                break;
            }
        }
        if(flag==0)
        {
            assign(dept_course);
        }
        else
        {
            document.getElementById('error').textContent = 'Invalid';
        }
    }
    else
    {
        alert("Invalid");
    }
}
var num_class;
var c_code;
var fno;
var arr = new Array();
function assign(courses)
{
    arr = [];
    var facSlots = Array();
    var allSlots = Array();
    var availSlots = Array();
    
    for(var i=0; i < courses.length ; i++)
    {
        num_class = null;
        c_code = null;
        fno = null;
        //console.log(courses[i]);
        get_course_info(courses[i]);
        //console.log(c_code);
        getDefaultObjectAt(arr, i).course = courses[i];
        getDefaultObjectAt(arr, i).c_code = c_code;
        
        getDefaultObjectAt(arr, i).fac = get_fac(c_code);
        fno = arr[i].fac[0];
        
        facSlots = get_facSlot(fno);
        allSlots= get_AllSlot(num_class);
        availSlots = allSlots.diff(facSlots);
        
        getDefaultObjectAt(arr, i).availSlots = availSlots;  
    }
    for(var i=0; i <arr.length ;i++)
    {
        if(arr[i].availSlots.length==0)
        {
            alert("Not possible");
            location.reload();
        }
    }
    var slots = [];
    var n = arr.length;
    var indices = [];
    var flag = 0;
    var options = [];
    for (var i = 0; i < n; i++) 
    {    indices[i] = 0;
    } 

    
    while(1)
    {
        
        for(var i=0; i<n;i++)
        {
            slots[i] = arr[i].availSlots[indices[i]];
        }
        var clash = 0;
        for(var i=0; i < n; i++)
        {
            for(var j=i+1; j < n;j++)
            {
                if(slots[i].length > slots[j].length)
                {
                    if(slots[i].includes(slots[j]))
                    {
                        clash=1;break;
                    }
                }
                else
                {
                    if(slots[j].includes(slots[i]))
                    {
                        clash=1;break;
                    }
                }
            }
            if(clash == 1)
                break;
        }
        if(clash == 0)
        {   
           
            break;
        }
        var next = n-1;
        while( next >=0 && (indices[next]+1 >= arr[next].availSlots.length))
            next--;
        if(next < 0)
        {
            flag = 1;
            break;
        }
        indices[next]++;
        for(var i = next+ 1; i < n; i++)
            indices[i] = 0;  


    }
    if(flag==0)
    { 
        for(var i = 0; i < slots.length ;i++)
            {
                getDefaultObjectAt(arr,i).allotedSlot = slots[i]; 
            }
            var text=`<button type="button" class=Generate onclick="insert();this.disabled = true;">Generate</button>`;
            document.getElementById("generate").innerHTML = text;
    }
    else
    {
        alert("Not possible");
        location.reload();
    }
}



function get_course_info(course)
{
    var hr = new XMLHttpRequest();
    var url = "../course_info.php";
    var vars = "course="+course;
    hr.open("POST", url, false);
    
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
            
            return_data = JSON.parse(return_data);
            c_code = return_data[0].C_code;
            num_class = return_data[0].No_of_classes;
	    }
    }
    hr.send(vars);
    //console.log(num_class);
    
}
function get_fac(c_code)
{
    var ar = new Array();
    var hr = new XMLHttpRequest();
    var url = "../faculty.php";
    var vars = "c_code="+c_code;
    hr.open("POST", url, false);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            return_data = JSON.parse(return_data);
            for( var i=0; i< return_data.length; i++)
            {   
                //fno = return_data[0].Fno;
                ar[i] = return_data[i].Fno;
            }
	    }
    }
    hr.send(vars);
    return ar;
}

function get_facSlot(fno)
{
    var ar = Array();
    var hr = new XMLHttpRequest();
    var url = "../faculty_slots.php";
    var vars = "fno="+fno;
    hr.open("POST", url, false);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            return_data = JSON.parse(return_data);
            ar = return_data;
        }
    }
    hr.send(vars);
    return ar;
}

function get_AllSlot(num)
{
    var ar = Array();
    var hr = new XMLHttpRequest();
    var url = "../allslots.php";
    var vars = "num="+num;
    hr.open("POST", url, false);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            return_data = JSON.parse(return_data);
            if(return_data.length>0)
            {   
                ar = return_data;
            }
	    }
    }
    hr.send(vars);
    return ar;
}

// array of object
function getDefaultObjectAt(array, index)
{
    return array[index] = array[index] || {};
}

// difference of two arrays
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

function insert()
{
    //console.log(arr);
    for(var i=0; i< arr.length;i++ )
    {
        for(var j=0; j< arr[i].fac.length; j++)
        {
            $.post("allot_insert.php", { c_code: arr[i].c_code, slot: arr[i].allotedSlot, fac: arr[i].fac[j],year: year,dept: dept},function(data){
                console.log("success", data);
            })
        }

    }
    document.getElementById("generate").disabled = true; 
    document.getElementById("no_subButton").disabled = true;
}
