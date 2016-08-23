
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
            , filepath = printf( '{0}/mvproject_tmp.zip', dir )
            ;

        _arg.length && ( project = _arg.join('') );
         

        if( !( project in Project && ( url =  Project[ project ] ) ) ){
            console.log( printf( 'project: {0} not found' , project ).red );
            return;
        }
        console.log( printf( 'installing project: {0}', project ).blue );


        if( !shell.which( 'wget' ) ){
            console.log( 'wget not exists, please install wget:\nsudo yum install wget'.yellow );
            return;
        }

        if( shell.test( '-e', filepath ) ){
            shell.rm( '-f', filepath );
        }

        shell.exec( printf( 'wget {0} -O {1}', url, filepath ) );


        if( !shell.which( 'unzip' ) ){
            console.log( 'unzip not exists, please install unzip:\nsudo yum install unzip'.yellow );
            return;
        }

        //console.log( printf( 'unzip {0} -d {1}', filepath, dir ) );
        shell.exec( printf( 'unzip -o {0} -d {1}', filepath, dir ) );


        /*
        if( isBower ){
            tmp = printf( '{0} install --force', Config.shell.bower );
            console.log( printf( 'update bower with cmd: {0}' , tmp ).blue );
            shell.exec( tmp  );
        }
        */

    });

};
