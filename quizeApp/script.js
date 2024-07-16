const question =[
    {
        'que':"what is your name",
        'A':"my name you know dude",
        'B':"why you want",
        'C':"you don't know my name shit...!",
        'D':"guesh what is my name",
        'correct':"A"
    },
    {
        'que':"what is the privius ans you selected",
        'A':"ohhh i forgot brooo",
        'B':"what a non sense question this is",
        'C':"i think B",
        'D':"i am not Robot",
        'correct':"B"
    },
    {
        'que':"finally we are in the 3rd question ",
        'A':"are you asking me or telling me",
        'B':"where is 3rd question",
        'C':"why you are a live",
        'D':"onji kori unash bokka kabbab",
        'correct':"D"
    }

]

let index=0;
const total=question.length;
let right=0,wrong=0;
const quest=document.getElementById("ques");
const inputs=document.querySelectorAll(".option");
const loadQuest=()=>{
    
    if(index==total)
        {
            return endQuize();
        }
        else{
            resetQuize();
        
    const data=question[index];
    quest.innerText=`${index+1}) ${data.que}`;
     inputs[0].nextElementSibling.innerText=data.A;
     inputs[1].nextElementSibling.innerText=data.B;
     inputs[2].nextElementSibling.innerText=data.C;
     inputs[3].nextElementSibling.innerText=data.D;
        }
     
}



const submitQuize=()=>{
    const ans=checkAsn();
    const data=question[index];
    if(ans===data.correct)
        {
            right++;
        }
        else{
            wrong++;
        }
        index++;
        loadQuest();
        return;
}

const checkAsn=()=>{
    let ans;
    inputs.forEach(
        (input)=>{
            if(input.checked)
                {
                     ans=input.value; 
                       
                }
                 
        }
    )
    return ans;
}

const resetQuize=()=>{
    inputs.forEach(
        (input)=>{
            console.log("you reched here");
            input.checked=false;
        }
    )
}

const endQuize=()=>{
    document.getElementById("box").innerHTML=
        `<h2>thank you bhai for attending Quize</h2>
        <h2>${right}/${total} are Correct</h2>`


    
}

loadQuest();