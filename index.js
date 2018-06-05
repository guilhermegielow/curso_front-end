const fs = require("fs");
//import fs from "fs";
const path = require("path");

console.log("Olá mundo");

const cwd = process.cwd();
const folder = path.join(cwd, "teste");

fs.access(folder, function(err) {
	console.log(err);
});

//while(true) {};
console.log("Fim");
