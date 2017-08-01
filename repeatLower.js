

// 找出重复次数最少的最靠前的元素

var s = '112223334445531122343546562357523gyuy32gfe8723rfgey';

var i = 0;
var len = s.length;
var map = {};

while( i < len ) {

    if ( s[i] in map ) {
        map[ s[i] ] += 1;
    } else {
        map[ s[i] ] = 1;
    }

    i++;
}

console.log( map )
