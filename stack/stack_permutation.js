
// 栈混洗
// 每一栈混洗都对应于由栈S的n次push的n次pop构成的合法操作序列
// 反之，n次pop与push构成的任何操作序列，也对应于某个栈混洗

// 括号匹配


var exp = 'a / ( b[i-1][j+1] ) + (c[i+1][j-1])';
var exp2 = 'a / ( b[i-1][j+1] + (c[i+1][j-1])';

function paren( exp ) {
    var stack = [];
    for ( var i = 0, len = exp.length; i < len; i++ ) {
        switch ( exp[i] ) {
            case "(": 
            case "[":
            case "{":
                stack.unshift( exp[i] );
                break;
            case ")":
                if ( !stack.length || '(' !== stack.shift() ) {
                    return false;
                }
                break;
            case "}":
                if ( !stack.length || '{' !== stack.shift() ) {
                    return false;
                }
                break;
            case "]":
                if ( !stack.length || '[' !== stack.shift() ) {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return !stack.length;
}

var res1 = paren( exp );
var res2 = paren( exp2 );


console.log( "输入内容：", exp );
console.log( "匹配结果：", res1 );
console.log( "输入内容：", exp2 );
console.log( '匹配结果：',res2 );




