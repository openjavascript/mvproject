
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

    var isQnpm = shell.which( "qnpm" );
    if( !isQnpm ){
        config.shell.npm = 'npm';
        console.log( ' 为了提高安装速度, 请安装 qnpm 环境: http://qnpm.qiwoo.org/help/qnpm, \n npm install -g @q/qnpm --registry=http://registry.npm.qiwoo.org'.yellow );
        Evt.emit( Const.notify.qnpm_not_installed );
    }

};
