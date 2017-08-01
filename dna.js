var s = 'AAAAACCCECAAAAACCCCCGGGGGEEEECTEEE';
var len = s.length;
// 找出重复的十个值

// 第一步，分成五个一组
var i = 0;
var newArr = [];
while( i < len ) {
    slice = s.slice( 0, 5 );
    s = s.slice( 5 );
    newArr.push( slice );
    i+=5;
}


// 第二步，查看两个相邻的是否是重复的
var outputArr = [];
var reg = /A{5}|C{5}|E{5}|G{5}|T{5}/;
newArr.reduce( function ( bef, cur ) {
    if ( reg.test( bef ) && reg.test( cur ) ) {
        outputArr.push( bef + cur );
    }
    return cur;
});


console.log( outputArr );
