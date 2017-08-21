
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

    var iscnpm = shell.which( "cnpm" );
    if( !iscnpm ){
        Config.shell.npm = 'npm';
        console.log( ' 由于国外网络较慢, 为了提高下载速度,\n 请安装 cnpm 环境: https://npm.taobao.org/, \n npm install -g cnpm --registry=https://registry.npm.taobao.org'.yellow );
        Evt.emit( Const.notify.cnpm_not_installed );
    }

};
