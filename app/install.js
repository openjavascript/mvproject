
var events = require('events')
    , Evt = new events.EventEmitter()
    , shell = require("shelljs")
    , colors = require( 'colors' )

    , Config = require( '../common/config.js' )
    , Const = require('../common/const.js')
    , Project = require('../common/project.js')
    , printf = require( "../utils/printf.js" )
    ;

module.exports = function( Evt ){
    if( !Evt ) return;

    Evt.on( Const.cmd.install, function( _arg ){
        _arg = _arg || [];
        //console.log( 'handler from Const.cmd.install', _arg );

        var dir = shell.pwd().stdout
            //, isBower = shell.test( '-e', printf( '{0}/bower.json', dir ) )
            , project = 'webpack1'
            , url
            ;

        _arg.length && ( project = _arg.join('') );
         

        if( !( project in Project && ( url =  Project[ project ] ) ) ){
            console.log( printf( 'project: {0} not found' , project ).red );
            return;
        }
        console.log( printf( 'installing project: {0}', project ).blue );
        console.log( url );

        /*
        if( isBower ){
            tmp = printf( '{0} install --force', Config.shell.bower );
            console.log( printf( 'update bower with cmd: {0}' , tmp ).blue );
            shell.exec( tmp  );
        }
        */

    });

};
