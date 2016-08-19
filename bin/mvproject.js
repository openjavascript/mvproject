#! /usr/bin/env node

var shell = require("shelljs");
var colors = require( 'colors' );

var getArgs = require( "../utils/get_args.js" );
var config = require( '../config.js' );

var args = getArgs( process );

//shell.exec("echo command from mvproject");

console.dir( args );

var isQnpm = shell.which( "qnpm" );

//console.dir( config );

if( !isQnpm ){
    config.npm = 'npm';
    console.log( '为了提高安装速度, 请安装 qnpm 环境: http://qnpm.qiwoo.org/help/qnpm'.yellow );
}
//console.dir( config );
