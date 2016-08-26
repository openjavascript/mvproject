
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

    Evt.on( Const.cmd.stc, function( _arg ){
        //console.log( 'handler from Const.cmd.stc', _arg );

        var dir = shell.pwd().stdout
            , isExists = shell.test( '-e', printf( '{0}/../stc', dir ) )
            , tmp
            ;

        //console.log( 'stc isExists', isExists );
        if( isExists ){
            console.log( 'stc is exists'.blue );
            return;
        }
        console.log( Config.files.stc );
        console.log( 'zip is exists', shell.test( '-e', printf( '{0}', Config.files.stc ) ) );
        /*
        if( canBuild ){
            tmp = printf( 'bash build.sh' );
            console.log( printf( 'build with cmd: {0}' , tmp ).blue );
            shell.exec( tmp [>, Config.params.silent<] );
        }else{
            console.log( printf( 'file not found: {0}/build.sh' , dir ).blue );
        }*/

    });

};
