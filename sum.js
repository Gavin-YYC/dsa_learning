

var arr = [1,2,3,4,5];


function sum_normal ( arr ) {
    var sum = 0;
    for ( var i = 0; i < arr.length; i++ ) {
        sum += arr[i];
    }
    return sum;
}

function sum ( arr ) {
    var len = arr.length;
    if ( len == 0 ) {
        return 0;
    } else {
        return sum( arr.slice(0, len - 1) ) + arr[len - 1];
    }
}

var res = sum( arr );

var res_normal = sum_normal( arr );

console.log( res )
console.log( res_normal )
