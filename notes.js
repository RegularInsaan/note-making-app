const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return "your notes";
}

const addNote = (title, body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>{
        if(title === note.title) return true
    })

    

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log('new note added')
    }
    else{
        console.log('note already present')
    }    
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    }
    catch(e){
        return []
    }
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const macthingNote = notes.filter(function(note){
        return note.title !== title;
    })
    if(macthingNote.length !== notes.length){
        saveNotes(macthingNote)
        console.log(chalk.bgGreen("deleted"))
    }  
    else console.log(chalk.bgRed.black("not found"))
}

const listNotes = ()=>{
    notes = loadNotes();
    
    console.log(chalk.inverse.yellow("Your Notes"))

    notes.forEach((note) => {
        console.log(chalk.bold(note.title))
        console.log(note.body)
    })

    
}

const readNote = (title)=>{
    notes = loadNotes()
    
    const noteRead = notes.find((note) => note.title === title)

    if(noteRead){
        console.log(chalk.bold(noteRead.title))
        console.log(noteRead.body)
    }
    else{
        console.log("not found")
    }
}

module.exports = { 
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    loadNotes: loadNotes,
    listNotes: listNotes,
    readNote: readNote,
}