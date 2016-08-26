
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
            , tmp
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
        var unzipstd = shell.exec( printf( 'unzip -o {0} -d {1}', filepath, dir ) );
        //console.log( unzipstd.stdout.green );
        var output_dir = '';
        unzipstd.stdout.replace( /(\/.*?\-master\/)/, function($0, $1){
            output_dir = $1;
        });
        output_dir = ( output_dir || '' ).trim();
        //console.log( 'output_dir: ', output_dir.blue );

        if( !output_dir ){
            console.log( printf( 'output_dir not found' ).red );
            return;
        }

        tmp =  printf( 'mv -f {0}* {1}', output_dir, dir  ); 
        shell.exec( tmp );

        shell.exec( printf( 'rm -rf {0}', output_dir ) );
        shell.exec( printf( 'rm -rf {0}', filepath ) );

        //if( shell.which( 'mvproject' ) ){
            //console.log( printf( 'init npm and bower components, {0}', Const.msg.taketime ).blue );
            //shell.exec( printf( 'cd {0} && mvproject update', dir ) );
            Evt.emit( Const.cmd.update );
            Evt.emit( Const.cmd.stc );
            Evt.emit( Const.notify.install_done );
        //}
    });

    Evt.on( Const.notify.install_done, function( _arg ){
        console.log( '\nmvproject job is done.\n'.blue );
        console.log( 'at this time you may type:',  'webpack --watch'.blue, 'for do something~' );
    });

};
