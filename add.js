
var add = function () {
    var args = [].slice.call( arguments );

    var fn = function () {
        var args2 = [].slice.call( arguments );
        return add.apply(null, args.concat( args2 ));
    }

    fn.valueOf = function () {
        return args.reduce(function (bef, cur) {
            return bef + cur;
        })
    }

    return fn;
}

var res = add(1,2,3)(1,2,3)(1,2,3);

console.log( res )
