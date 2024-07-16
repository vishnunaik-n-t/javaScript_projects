const endDate="23 May 2024 6:31:0  AM";
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input");

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const sec=(end-now)/1000;
    if(sec<0)
        return;
    inputs[0].value=Math.floor(sec/3600/24);
    inputs[1].value=Math.floor((sec/3600)%24);
    inputs[2].value=Math.floor((sec/60)%60);
    inputs[3].value=Math.floor((sec)%60);
}

clock(); 

setInterval(()=>{
    clock()
},1000
)