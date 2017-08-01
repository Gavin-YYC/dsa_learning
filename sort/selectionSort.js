const utils = require('./util.js');
const randomList = utils.randomList( 10 );

// 选择排序
// 选择排序和插入排序的思路相反
// 选择排序将序列分成两组，无序前缀和有序后缀
// 每次从前缀中选出最大者，并最为最小元素转移到后缀中

// 在任何时刻，后缀S(r, n)已经有序，且不小于前缀S[0, r]

function selectionSort( sort ) {
    let i = sort.length;
    let sorted = [];
    while( i >= 0 ) {
        
    }
}


console.log( "原数组：", randomList );
const res = selectionSort( randomList );
console.log( "排序后：", res );
console.log( "时间复杂度：O(n^2)" );

