const DATA = [
    {
        min: 0,
        max: 14000,
        give: 0
    }, {
        min: 14000,
        max: 20000,
        give: 20
    }, {
        min: 20000,
        max: 30000,
        give: 50
    }
];

// 创建随机数
const x = Math.floor( Math.random() * 100000 );

console.log( 'x: ' + x );

// 选出所在的一组数据
const result = DATA.filter(item => x >= item.min && x < item.max)[0];
let lastItem, resultIndex;

if ( result !== undefined ) {
    resultIndex = DATA.indexOf( result  );
    lastItem = resultIndex + 1;
}

if ( result ) {

} else {
    console.log('经链商鉴定，你的智商已爆表！')
}
