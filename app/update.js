
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

    /*
    Evt.on( Const.teste, function(){
        console.log( 'resp from update.js' );
    });
    */

};
