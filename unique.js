// 数组唯一化处理
let arr = [3,3,4,4,4,6,6,7,8,8,10,10,12,15]
let i = 0;
let j = 0;
while ( ++j, j <= arr.length  ) {
    if ( arr[i] != arr[j]  ) {
        arr[++i] = arr[j];
    }
}

unique_arr = arr.slice( 0, i );
console.log( unique_arr );
console.log( '复杂度：O(n)' );
