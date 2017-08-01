
// 迷宫寻径
// 试探 - 回溯策略

// 迷宫每个点的状态
var STATUS = {
    WALL: 0,
    AVAILABLE: 1,
    ROUTE: 2,
    BACKTRACKED: 3
}

// 生成一个迷宫
function createCell( n ) {
    var cells = [];
    for ( var i = 0; i < n; i++ ) {
        cells[i] = [];
        for ( var j = 0; j < n; j++ ){
            if ( i === 0 || j === 0 || i === n - 1 || j === n - 1 ) {
                cells[i][j] = STATUS.WALL;
            } else {
                var random = Math.floor( Math.random() * n + 1 );
                cells[i][j] = random < n / 5 ? STATUS.WALL : STATUS.AVAILABLE;
            }
        }
    }
    return cells;
}

// 获取可用的方向
// cell 是数组[11,11]
function getAvaliableDirection( cell, cells ) {
    // 检查top
    var h = cell[0];
    var v = cell[1];
    var directions =[];
    if ( cells[ h + 1 ][ v ] !== STATUS.WALL ) {
        directions.push([h+1, v]);
    }
    if ( cells[ h - 1 ][ v ] !== STATUS.WALL ) {
        directions.push([h-1, v]);
    }
    if ( cells[ h ][ v + 1 ] !== STATUS.WALL ) {
        directions.push([h, v + 1]);
    }
    if ( cells[ h ][ v - 1 ] !== STATUS.WALL ) {
        directions.push([h, v - 1]);
    }
    return directions;
}


var cells = createCell( 13 );

var directions = getAvaliableDirection( [8,8], cells );

console.log( cells );
console.log( directions );
