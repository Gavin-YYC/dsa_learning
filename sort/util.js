
// 工具库

var utils = {
    // 获取随机序列
    // [1, 100]
    randomList: function ( n ) {
       if ( !n ) return;
       let output = [];
       for ( let i = 0; i < n; i++ ) {
           output.push( Math.floor( Math.random() * 100 + 1 ) );
       }
       return output;
    }
}

module.exports = utils
