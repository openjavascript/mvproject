#! /usr/bin/env node

var events = require('events');
var Evt = new events.EventEmitter();
var Const = require('../app/const.js');

var shell = require("shelljs");
var colors = require( 'colors' );

var config = require( '../config.js' )
    , getArgs = require( "../utils/get_args.js" )
    , printf = require( "../utils/printf.js" )
    ;

var cmd_args = getArgs( process );
var cmd = '', args = [];
if( cmd_args.length ){
    cmd = cmd_args[ 0 ];
    if( cmd_args.length > 1 ){
        args = cmd_args.slice( 1 );
    }
}

require( '../app/update.js' )( Evt );
require( '../app/check_env.js' )( Evt );

/*
console.dir( config );
console.log( printf( 'cmd: {0}, arg: {1}', cmd, arg ).blue );
*/

cmd 
    && ( cmd in Const.cmd )
    && Evt.emit( Const.cmd [ cmd ], args )
    ;

