localStorage.clear();
function year()
{   
    var e = document.getElementById("year");
    var no = 0;
    var year = e.options[e.selectedIndex].value;
    console.log(year);
    var text = "";
    if(year == "I YEAR")
    {
        no = 1;
    }
    else if(year == "II YEAR")
    {
        no = 2;
    }
    else if(year == "III YEAR")
    {
        no = 3;
    }
    else if(year == "IV YEAR")
    {
        no = 4;
    }
    else
    {
        alert('Invalid');
        location.reload();
    }
    text = `<div class="p1">
    <p>SELECT DEPARTMENT:</p>
    </div>
    <div class="center">
        <button type="button" style="margin:10px;" class=button onclick="CSE(`+no+`)">CSE</button>
    
        <button type="button" style="margin:10px;" class=button onclick="ECE(`+no+`)">ECE</button>
      
        <button type="button" style="margin:10px;" class=button onclick="MECH(`+no+`)">MECH</button>
        <br>
        <button type="button" style="margin:10px;" class=button onclick="EEE(`+no+`)">EEE</button>
   
        <button type="button" style="margin:10px;" class=button onclick="ECM(`+no+`)">ECM</button>
    </div>`;
    
    document.getElementById("demo").innerHTML = text;
    console.log(text);
}

function CSE(no)
{
    localStorage.setItem('dept','CSE');
    localStorage.setItem('year',no);
    location.href='Allot/allot.html';
  
}

function ECE(no)
{
    localStorage.setItem('dept','ECE');
    localStorage.setItem('year',no);
    location.href='Allot/allot.html';
}

function MECH(no)
{
    localStorage.setItem('dept','MECH');
    localStorage.setItem('year',no);
    location.href='Allot/allot.html';
}

function EEE(no)
{
    localStorage.setItem('dept','EEE');
    localStorage.setItem('year',no);
    location.href='Allot/allot.html';
}

function ECM(no)
{
    localStorage.setItem('dept','ECM');
    localStorage.setItem('year',no);
    location.href='Allot/allot.html';
}
