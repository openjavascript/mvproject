
var events = require('events')
    , Evt = new events.EventEmitter()
    , shell = require("shelljs")
    , colors = require( 'colors' )

    , Config = require( '../config.js' )
    , Const = require('../app/const.js')
    , printf = require( "../utils/printf.js" )
    ;

module.exports = function( Evt ){
    if( !Evt ) return;

    Evt.on( Const.cmd.build, function( _arg ){
        //console.log( 'handler from Const.cmd.update', _arg );

        var dir = shell.pwd().stdout
            , canBuild = shell.test( '-e', printf( '{0}/build.sh', dir ) )
            , tmp
            ;

        if( canBuild ){
            tmp = printf( 'bash build.sh' );
            console.log( printf( 'build with cmd: {0}' , tmp ).blue );
            shell.exec( tmp /*, Config.params.silent*/ );
        }else{
            console.log( printf( 'file not found: {0}/build.sh' , dir ).blue );
        }

    });

};
