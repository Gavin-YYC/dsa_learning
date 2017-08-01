
// 十进制转换成任意进制

// 递归算法
// n 十进制数
// j 要转换的进制单位
function convert( n, j ) {
    var out = [];
    function _convert ( n, j ) {
        if ( n > 0 ) {
            out.unshift( n % j );
            _convert( Math.floor( n / j ), j );
        }
    }
    _convert( n, j );
    return out.join('');
}

var res = convert( 12345, 8 );
console.log( '递归: ', res );


// 迭代算法
// 每一次经过计算后，n都会减少，即问题的有效规则不断减小
// 知道n = 0
// 减而治之的策略
function convet2( n, j ) {
    var out = [];
    while( n > 0 ) {
        out.unshift( n % j )
        n = Math.floor( n / j, j );
    }
    return out;
}

var res2 = convert( 12345, 8 );
console.log( "迭代: ", res2 );
