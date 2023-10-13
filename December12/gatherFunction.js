function _filter(list, predi) {
    var new_list = [];
    _each(list, function(val){ 
        if(predi(val)) {new_list.push(val);}
    });
    return new_list;
}

function _map(list, mapper){
    var new_list = [];
    _each(list, function(val){new_list.push(mapper(val));});
    return new_list;
}

function _each(list, iter) {
    for (var i=0; i<list.length; i++) {
        iter(list[i]);
    }
    return list;
}

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

function _get(obj, key){
    return obj==null? undefined : obj[key];
}

var _get = _curryr(function(obj,key) {
    return obj == null ? undefined : obj[key];
});

function _reduce(list, iter, memo) {
    if(arguments.length==2) {
        memo=list[0];
        list = _rest(list);
    }
    _each(list, function(val){
        memo = iter(memo, val);
    });
    return memo;
}

var slice = Array.prototype.slice;
function _rest(list,num) {
    return slice.call(list, num || 1);
}

function _pipe() {
    var fns = arguments;
    return function(arg) {
        return _reduce(fns, function(arg, fn) {
            return fn(arg);
        }, arg);
    }
}

function _go(arg){
    var fns = _rest(arguments); 
    return _pipe.apply(null, fns)(arg);
}

//맵과 필터 함수를 커리r 로 입히기

var _map = _curryr(_map), 
    _filter = _curryr(_filter);

//JavaScript에서 변수를 한 줄에 동시에 선언할 때 변수 타입은 
//첫 번째 변수에 따라갑니다. 
//즉, 변수 선언의 첫 번째 변수에 사용된 선언 키워드가 그 줄의 모든 변수에 적용됩니다.
//curryr를 씌우면_map(users, _get('name')); 이것과 _map(_get('name'))(users); 의 결과가 같아짐
//변수를 넣고 함수를 넣는 것과 함수를 넣고 나중에 인자를 받는게 같아짐.

//화살표 함수 간단히

var arrow = function(user){return user.age<30};
var arrow = user => user.age<30;

var sub = function(a,b) { return a-b; };
var sub = (a,b) => a-b;

var add = (a,b) => ({val:a+b}); //객체를 만드려면 ()넣어줘야함 

//_each 함수에 리스트가 null일 경우 에러가 뜨므로, (list.length가 안되기 때문에)
//_get을 이용하여 에러를 방지시키자

var _length = _get('length');

function _each(list, iter) {
    var keys = _keys(list);
    for (var i=0, len = keys.length ; i<len; i++) {
        iter(list[keys[i]]);
    }
    return list; //return list;는 생략해도 됨
}


// _keys함수 만들기 (Object.keys()를 더 안전하게 한 것)

console.log(Object.keys({name:"ID", age:15})); //['name', 'age']
console.log(Object.keys([1,2,3,4])); // ['0', '1', '2', '3']
console.log(Object.keys(10)); // []
// console.log(Object.keys(null)); //에러


function _is_object(obj) {
    return typeof obj == 'object' && !!obj;
}
function _keys(obj) {
    return _is_object(obj) ? Object.keys(obj) : [];
}
console.log(_keys(null)); 


_each({
    11:"AB",
    12:"CD",
    13:"EF",
    14:"GH"
}, function(name) {
    console.log(name)
});