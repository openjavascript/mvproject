
var events = require('events')
    , Evt = new events.EventEmitter()
    , shell = require("shelljs")
    , colors = require( 'colors' )

    , Config = require( '../common/config.js' )
    , Const = require('../common/const.js')
    , printf = require( "../utils/printf.js" )
    ;

module.exports = function( Evt ){
    if( !Evt ) return;

    Evt.on( Const.cmd.update, function( _arg ){
        //console.log( 'handler from Const.cmd.update', _arg );

        var dir = shell.pwd().stdout
            , isBower = shell.test( '-e', printf( '{0}/bower.json', dir ) )
            , isNpm = shell.test( '-e', printf( '{0}/package.json', dir ) )
            , tmp
            ;
        console.log( dir, isBower, isNpm );

        if( isNpm ){
            tmp = printf( '{0} install', Config.shell.npm );
            console.log( printf( 'update npm with cmd: {0}, {1}', tmp, Const.msg.taketime ).blue );
            shell.exec( tmp /*, Config.params.silent*/ );
        }

        if( isBower ){
            tmp = printf( '{0} install --force', Config.shell.bower );
            console.log( printf( 'update bower with cmd: {0}, {1}', tmp, Const.msg.taketime ).blue );
            shell.exec( tmp /*, Config.params.silent*/ );
        }

    });

};
