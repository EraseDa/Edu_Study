// 파이프라인 만들기
function _pipe() {
    var fns = arguments;
    return function(arg) {
        return _reduce(fns, function(arg, fn) {
            return fn(arg);
        }, arg);
    }
}

var f1 = _pipe(
    function(a){return a+1;},
    function(a){return a*2;});

    console.log(f1(1));


var slice = Array.prototype.slice;
function _rest(list,num) {
    return slice.call(list, num || 1);
}
    //go 함수 만들기 (go는 파이프함수와 다르게 함수가 아닌 인자도 들어가며
    //함수가 리턴되는게 아니라 값이 리턴됨.)

    function _go(arg){
        var fns = _rest(arguments); 
        return _pipe.apply(null, fns)(arg);
    }


    _go(1,
        function(a){a+1},
        function(a){a*2},
        function(a){a*a},
        console.log);