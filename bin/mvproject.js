#! /usr/bin/env node

var events = require('events')
    , Evt = new events.EventEmitter()
    , shell = require("shelljs")
    , colors = require( 'colors' )

    , Config = require( '../config.js' )
    , Const = require('../app/const.js')
    , printf = require( "../utils/printf.js" )
    , getArgs = require( "../utils/get_args.js" )
    ;

var cmd_args = getArgs( process )
    , cmd = ''
    , args = []
    ;

if( cmd_args.length ){
    cmd = cmd_args[ 0 ];
    if( cmd_args.length > 1 ){
        args = cmd_args.slice( 1 );
    }
}

require( '../app/check_env.js' )( Evt );
require( '../app/update.js' )( Evt );
require( '../app/build.js' )( Evt );

/*
console.dir( config );
console.log( printf( 'cmd: {0}, arg: {1}', cmd, arg ).blue );
*/

cmd 
    && ( cmd in Const.cmd )
    && Evt.emit( Const.cmd [ cmd ], args )
    ;
