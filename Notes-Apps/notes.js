const fs = require('fs')
const chalk = require('chalk');
const getNotes = (file) => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    debugger

    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const noteToKeep = notes.filter((note) => note.title !== title)
    
    if(notes.length > noteToKeep.length){
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(noteToKeep)
    }else {
        console.log(chalk.red.inverse("No note removed!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue.inverse('Your Notes:'))

    notes.forEach((note) => {
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()

    const findNote = notes.filter((note) => note.title === title)[0]

    if(findNote){
        console.log(chalk.green.inverse('Note Found'))
        const { title, body } = findNote
        console.log(`Title: ${title}`)
        console.log(`Body: ${body}`)
    }else {
        console.log(chalk.red.inverse('Note not Found'))
    }

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (err) {
        return []
    }

}

const saveNotes = (notes) => {
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json', dataJSON)
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNotes: readNotes 
}
