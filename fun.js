var Gpio = require("onoff").Gpio
var args = process.argv.slice(2)
var funs = new Gpio(4,"out")

if (args[0]=="-help")console.log("nodejs fun.js on;nodejs fun.js on")
if(args[0]=="on")funs.writeSync(1)
if(args[0]=="off")funs.writeSync(0)
