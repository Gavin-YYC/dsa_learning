

// 递归版 reverse
function reverse( arr, firstIndex, lastIndex ) {
    var temp;
    if ( firstIndex < lastIndex ) {
        // swap 
        temp = arr[firstIndex];
        arr[firstIndex] = arr[lastIndex];
        arr[lastIndex] = temp;
        reverse( arr, firstIndex + 1, lastIndex - 1 );
    }
}

var arr = [3, 4, 5, 3, 2, 6, 7, 3, 2];

console.log( "原始数组：", arr );

reverse( arr, 0, arr.length - 1 );

console.log( "翻转数组：", arr );
