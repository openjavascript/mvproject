
var events = require('events');
var Evt = new events.EventEmitter();
var Const = require('../app/const.js');

var shell = require("shelljs");
var colors = require( 'colors' );

var config = require( '../config.js' )
    , printf = require( "../utils/printf.js" )
    ;

module.exports = function( Evt ){
    if( !Evt ) return;

    var isQnpm = shell.which( "qnpm" );
    if( !isQnpm ){
        config.shell.npm = 'npm';
        console.log( '为了提高安装速度, 请安装 qnpm 环境: http://qnpm.qiwoo.org/help/qnpm'.yellow );
        Evt.emit( Const.qnpm_not_installed );
    }


};
