const validator = require('validator')

const chalk = require('chalk')

const yargs = require('yargs')

const notes = require('./notes.js')
const { readNote } = require('./notes.js')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "title of the note",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "body of the note",
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: "title of the note",
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
        console.log 
    }
})

yargs.command({
    command: 'list',
    describe: 'listing the list',
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading the list',
    builder:{
        title:{
            describe: "title of the note",
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv)=>{
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)