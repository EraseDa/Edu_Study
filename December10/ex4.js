//커링
    //1. _curry, _curryr
    function _curry(fn){
        return function(a, b) {
            return arguments.length == 2 ? 
            fn(a,b) : function(b) {return fn(a,b);}
        }
    }

    function _curryr(fn){
        return function(a, b) {
            return arguments.length == 2 ? 
            fn(a,b) : function(b) {return fn(b,a);}
        }
    }

    var add = _curry(function(a,b){
        return a+b;
    });

    console.log(add(3)(4)); //7

    /*함수 커링(curring)을 사용하면 함수를 연속해서 호출할 수 있도록 만드는 것입니다. 
    add(3)(4) 형태의 호출은 함수 add를 첫 번째 호출에서 3을 전달하고, 
    그 다음 호출에서 4를 전달하는 방식으로 동작합니다.
    add(3)add(4)과 같이 괄호 없이 연속적으로 호출하면 
    함수 add에 대한 하나의 인수만 전달되기 때문에 올바르게 동작하지 않습니다.
    함수 커링을 사용하면 함수가 필요한 모든 인수를 순차적으로 받을 수 있도록 구현됩니다. */

    var add5 = add(5);
    console.log(add5(10)); //10
    console.log(add(3,4)); //7

    var sub = _curry(function(a,b){
        return a-b;
    });
    var subr = _curryr(function(a,b){
        return a-b;
    });
    
    console.log(sub(10)(4));
    var sub10=subr(10);
    console.log(sub10(8));

//2. _get을 만들기
function _get(obj, key){
    return obj==null? undefined : obj[key];
}
//ex2 배열 참고
var user1 = users[0];
console.log(user1.name);
console.log(_get(user1, 'name'));
