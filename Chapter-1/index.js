// const lib=require("./lib.js")
// console.log(lib.sum(12,2),lib.diff(23,24))

/////////////////////////////////

// import {sum,diff} from './lib.js'
// console.log(sum(232,34),diff(413,34))

//////////////////////////////////

const fs=require("fs")
// const txt=fs.readFileSync("demo.txt","utf-8")
// console.log(txt)

fs.readFile("demo.txt","utf-8",(err,txt)=>{
    console.log(txt)
})
