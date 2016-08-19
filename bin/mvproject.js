#! /usr/bin/env node

var shell = require("shelljs");
var colors = require( 'colors' );

var config = require( '../config.js' )
    , getArgs = require( "../utils/get_args.js" )
    , printf = require( "../utils/printf.js" )
    ;

var cmd_args = getArgs( process );

//shell.exec("echo command from mvproject");

//console.dir( cmd_args );

var isQnpm = shell.which( "qnpm" );

var cmd = '', arg = '';

//console.dir( config );

if( !isQnpm ){
    config.npm = 'npm';
    console.log( '为了提高安装速度, 请安装 qnpm 环境: http://qnpm.qiwoo.org/help/qnpm'.yellow );
}
//console.dir( config );

if( cmd_args.length ){
    cmd = cmd_args[ 0 ];
    cmd_args[1].toString().length && ( arg = cmd_args[1] );
}

console.log( printf( 'cmd: {0}, arg: {1}', cmd, arg ) );
