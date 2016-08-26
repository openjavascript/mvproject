
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
            , filepath = printf( '{0}/stc_tmp.zip', dir )
            ;

        //console.log( 'stc isExists', isExists );
        if( isExists ){
            console.log( 'stc is exists'.blue );
            return;
        }
        if( !shell.test( '-e', filepath ) ){
            console.log( printf( 'get stc.zip, {0}', Const.msg.taketime ).blue );
            shell.exec( printf( 'wget {0} -O {1}', Config.files.stc, filepath ) );
        }

        tmp = shell.exec( printf( 'stat -c %s {0}', filepath ), Config.params.silent );
        tmp = parseInt( tmp.stdout.replace( /[^\d]/g, '' ) );

        if( !tmp ){
            shell.exec( printf( 'rm -rf {0}', filepath ) );
            console.log( 'get stc.zip failed'.red );
            return;
        }

        shell.exec( printf( 'unzip {0} -d {1}/../stc', filepath, dir ) );
        shell.exec( printf( 'rm -rf {0}', filepath ) );

    });

};
