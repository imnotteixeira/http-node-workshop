const fs = require("fs");

const path = require("path");

const filePath = path.join(__dirname, "/in/test")

console.log(filePath)

fs.readFile(filePath, "utf8", (err, data) => {
    if(err) console.log("asd", err)
    console.log(data.split("\n").map(el => el.toLocaleUpperCase()))
})