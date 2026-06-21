// DOM elements

const noteInput =
document.getElementById("noteInput");

const addBtn =
document.getElementById("addBtn");

const notesContainer =
document.getElementById("notesContainer");



// State


let notes =
JSON.parse(localStorage.getItem("notes"))
|| [];



// Save Notes


function saveNotes(){

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

}


// =====================
// Display Notes
// =====================

function displayNotes(){

    notesContainer.innerHTML = "";

    notes.forEach(function(note,index){

        const noteDiv =
        document.createElement("div");

        noteDiv.classList.add("note");


        noteDiv.innerHTML = `

            <p>${note}</p>

            <div class="actions">

                <button onclick="editNote(${index})">
                Edit
                </button>

                <button onclick="deleteNote(${index})">
                Delete
                </button>

            </div>

        `;

        notesContainer.appendChild(noteDiv);

    });

}


// =====================
// Add Note
// =====================

function addNote(){

    const noteText =
    noteInput.value.trim();

    if(noteText === ""){

        alert("Please enter a note");

        return;
    }

    notes.push(noteText);

    saveNotes();

    displayNotes();

    noteInput.value = "";

}


// =====================
// Delete Note
// =====================

function deleteNote(index){

    notes.splice(index,1);

    saveNotes();

    displayNotes();

}


// =====================
// Edit Note
// =====================

function editNote(index){

    const updatedNote =
    prompt(
        "Edit your note",
        notes[index]
    );

    if(updatedNote === null){

        return;

    }

    notes[index] =
    updatedNote.trim();

    saveNotes();

    displayNotes();

}


// =====================
// Event Listener
// =====================

addBtn.addEventListener(
    "click",
    addNote
);


// =====================
// Initial Load
// =====================

displayNotes();