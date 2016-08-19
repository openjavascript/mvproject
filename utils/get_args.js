
module.exports = function ( process ){
    var _r = [];

    if( process.argv.length > 2 ){
        for( var i = 2, j = process.argv.length; i < j; i++ ){
            _r.push( process.argv[i].trim() );
        }
    }
    return _r;
};
