const fs = require("fs");

fs.writeFileSync("notes.txt", "Hello ");

console.log(fs.readFileSync("notes.txt").toString());

fs.appendFileSync("notes.txt", "data to append");

const x = require("./data");
console.log(x);
console.log(x.nameUser);
console.log(x.name1);

var validator = require("validator");

console.log(validator.isEmail("dsadad@sda.com"));
console.log(validator.isEmail("dsadad"));

console.log(process.argv);
const myArgs = process.argv;

if (myArgs[2] === "add") {
  console.log("add item");
} else if (myArgs[2] === "remove") {
  console.log("remove item");
} else {
  console.log("error");
}

const yargs = require("yargs");
// const { demandOption } = require("yargs");

yargs.command({
    command:'add',
    describe:'Add notess',
    builder:{
        title:{
            describe:'this is add the title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'this is add the body',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
        console.log('Add notesss')
    }
})
yargs.command({
    command:'delete',
    describe:'delete notess',
    builder:{
        title:{
            describe:'this is delete the title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'this is delete the body',
            type:'string'
        }
    },
    handler:()=>{
        console.log('delete notesss')
    }
})
yargs.command({
    command:'read',
    describe:'read notess',
    builder:{
        title:{
            describe:'this is the title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'this is the body',
            type:'string'
        }
    },
    handler:()=>{
        console.log('read notesss')
    }
})

yargs.parse()
// console.log(yargs.argv)
// console.log(yargs.argv.title1)


