const utils = require('./util.js');
const randomList = utils.randomList( 10 );


// 插入排序
// 思路：将一组序列分成两组，前面一组是已经排序好的
// 后面一组是未排序的
// 每次从未排序的一组中取出第一个元素，然后与已排序的一组中比较
// 然后插入到合适的位置

// 在任何时刻，相当于当前节点e = S[r]，前缀S[0, r)总是业已有序

function inserSort ( sort ) {
    for ( let i = 1, len = sort.length; i < len; i++ ) {
        if ( sort[ i ] < sort[ i - 1 ] ) {
            let val = sort[ i ];
            let j = i - 1;
            sort[ i ] = sort[ j ];
            while( j >= 0 && val < sort[ j ] ) {
                sort[ j + 1 ] = sort[ j ];
                j--;
            }
            sort[ j + 1 ] = val;
        }
    }
    return sort;
}


console.log( "原数组：", randomList );
const res = inserSort( randomList );
console.log( "排序后：", res );
console.log( "时间复杂度：O(n^2)" );

