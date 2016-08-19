
module.exports = function( _str ){
    for(var i = 1, _len = arguments.length; i < _len; i++){
        _str = _str.replace( new RegExp('\\{'+( i - 1 )+'\\}', 'g'), arguments[i] );
    }
    return _str;
}

