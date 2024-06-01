var count=0;

window.onload=function(){
    var settingIcon=document.getElementById("gear");

    settingIcon.onclick=function(){
        var colorlist=document.getElementById("color-list");
        var colorswitch=document.getElementById("color-switch");

        if(count==0)
        {
            colorlist.style.width="130px";
            colorswitch.style.width="130px";
            count=1;
        }

        else{
            colorlist.style.width="0px";
            colorswitch.style.width="20px";
            count=0;
        }
        colorlist.style.transition="2s";
        colorswitch.style.transition="2s";
    }


    //moon light...

    var icon=document.getElementById("moon-icon");
    var iconclickcount=0;

    icon.onclick=function(){
        if(iconclickcount == 0){
        var parentdiv=document.getElementById("parent-div");
        parentdiv.style.background="#000";
        parentdiv.style.transition="2s";

        var bottomlist=document.getElementById("bottom-list");
        bottomlist.style.background="#000";
        bottomlist.style.transition="2s";
        icon.className="fa fa-sun-o"
        iconclickcount=1;
      }
      else{
        var parentdiv=document.getElementById("parent-div");
        parentdiv.style.background="#182848";
        parentdiv.style.transition="2s";

        var bottomlist=document.getElementById("bottom-list");
        bottomlist.style.background="#182848";
        bottomlist.style.transition="2s";

        icon.className="fa fa-moon-o";
        iconclickcount=0;

      }
    }
}

function changeTextColor(color){
    var buttons=document.getElementsByTagName("button");
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].style.color=color;
        buttons[i].style.transition="1s";
    }

    var para=document.getElementsByTagName("p");
    for(var i=0;i<para.length;i++)
    {
        para[i].style.color=color;
        para[i].style.transition="1s";
    } 

    var heading=document.getElementsByTagName("h3");
    for(var i=0;i<heading.length;i++)
    {
        heading[i].style.color=color;
        heading[i].style.transition="1s";
    }
}