#! /usr/bin/env node

var shell = require("shelljs");
var getArgs = require( "../utils/get_args.js" );
var config = require( "../config.js" );
var args = getArgs( process );

//shell.exec("echo command from mvproject");
console.dir( args );
