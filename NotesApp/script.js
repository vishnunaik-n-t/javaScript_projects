const addbtn=document.getElementById("addbtn");

const saveNotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach(
        (note)=>{
            data.push(note.value);
        }
    )
    if(data.length===0)
        {
            localStorage.removeItem("notes")
        }
        else{
            localStorage.setItem("notes",JSON.stringify(data))
        }
}

addbtn.addEventListener(
    "click", function(){
        addnote();
       
    }
)


const main=document.querySelector("#main");
const addnote=(text="")=>{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
            <div class="tool">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
            </div>
            <textarea name="" id="">${text}</textarea>
    `
    note.querySelector(".trash").addEventListener(
        "click", function(){
            note.remove();
            saveNotes();
        }
    )

    note.querySelector(".save").addEventListener(
        "click", function(){
            saveNotes();
           
        }
    )

    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes();
}

(
    function(){
        const lsnote=JSON.parse(localStorage.getItem("notes"));
        if(lsnote=== null)
            {
                addnote();
            }
            else{
                 lsnote.forEach(
            (lsnote1)=>{
                addnote(lsnote1);
            }
         )
            }
        
    }
)()