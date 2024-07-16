const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbols="~!@#$%^&*()_/?+";

 const getRandomData=(input)=>{
    return input[Math.floor(Math.random()*input.length)]
 }


 const totalChar=document.getElementById("total-char")
 const upperInput=document.getElementById("upper-case");
 const lowerInput=document.getElementById("lower-case");
 const numberInput=document.getElementById("number");
 const symbolInput=document.getElementById("symbols");

 let password;
 const generatePassword=(password="")=>{
    if(upperInput.checked){
        password +=getRandomData(upperSet);         
    }
    if(lowerInput.checked){
        password +=getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password +=getRandomData(number);
    }
    if(symbolInput.checked){
        password +=getRandomData(symbols);
    }
    if(totalChar.value>password.length)
        {
            return generatePassword(password);
        }
    
    let pas=trunket(password,totalChar.value);
    navigator.clipboard.writeText(pas);
     document.getElementById("pass-box").innerText=pas;
 }

 function trunket(str,num)
{
    if(str.length>num)
        {
            let substr=str.substring(0,num);
            return substr;
        }
        else{
            return str;
        }
}
 generatePassword();

 document.getElementById("btn").addEventListener(
    "click",function() {
        generatePassword();  
    }
 )

//  getRandomData(number);