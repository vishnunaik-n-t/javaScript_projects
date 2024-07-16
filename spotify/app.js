const Base_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns= document.querySelectorAll(".dropdown select");


for(let selec of dropdowns){
    for(currcode in countryList){
       let newOption=document.createElement("option");
       newOption.innerText=currcode;
       newOption.value=currcode;
       if(selec.name === "from" && currcode === "USD")
       {
        newOption.selected=selected;
       }
       else if(selec.name === "to" && currcode==="INR")
       {
        newOption.selected=selected;
       }
       selec.append(newOption);
    }
}