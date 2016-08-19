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
var cmd = '', arg = '';
if( cmd_args.length ){
    cmd = cmd_args[ 0 ];
    cmd_args[1].toString().length && ( arg = cmd_args[1] );
}

require( '../app/update.js' )( Evt );
require( '../app/check_env.js' )( Evt );

console.dir( config );
console.log( printf( 'cmd: {0}, arg: {1}', cmd, arg ).blue );

