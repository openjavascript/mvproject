
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

    var isQnpm = shell.which( "qnpm" );
    if( !isQnpm ){
        Config.shell.npm = 'npm';
        console.log( ' 由于国外网络较慢, 为了提高下载速度,\n 请安装 qnpm 环境: http://qnpm.qiwoo.org/help/qnpm, \n npm install -g @q/qnpm --registry=http://registry.npm.qiwoo.org'.yellow );
        Evt.emit( Const.notify.qnpm_not_installed );
    }

};
