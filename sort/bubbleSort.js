const utils = require('./util.js');
const randomList = utils.randomList( 10 );


// 冒泡排序
const bubbleSort = ( rand ) => {
    let len = rand.length;
    let temp;
    while ( len > 0 ) {
        for ( let j = 0; j <= len - 1; j++ ) {
            if ( rand[j] > rand[j+1] ) {
                temp = rand[j];
                rand[j] = rand[j+1];
                rand[j+1] = temp;
            }
        }
        len--;
    }
    return rand;
}

console.log( "原数组：", randomList );
const res = bubbleSort( randomList );
console.log( "排序后：", res );

console.log( '时间复杂度：O(n^2)' )

