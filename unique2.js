var arr = [3,4,2,3,5,7,9,4,2,1,3,5,9,45,2,32,12,2];
var len = arr.length;
var i = 1;
while ( i < len ) {
    arr.indexOf( arr[i] ) >= 0 ? 
        arr.splice( i, 1 ) :
        i++
}
console.log( arr )
