/* 
클로저 : 함수를 리턴하는 함수
curry :  함수+인자가 다 들어올때까지 실행을 지연하는 함수
curryr : 인자의 순거가 curry와 반대되게 들어옴
js에서는 함수를 저장할 수 있기 때문에(일급함수의 특징) curry함수를 사용할 수 있음.


f(a,b,c) : a,b,c, 가인자
f(1,2,3) : 1,2,3, 실인자

Array.prototype.slice();
slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 
얕은 복사본을 새로운 배열 객체로 반환합니다. 
원본 배열은 바뀌지 않습니다.
*/

let data = [1,2,3,4,5];

let data_copy = data.slice();

/**
 * Function.prototype.call()
 * 참고: 주의: 이 함수 구문은 apply()와 거의 동일하지만, call()은 인수 목록을, 반면에 apply()는 인수 배열 하나를 받는다는 점이 중요한 차이점입니다.
 */

function print(tp){
    console.log(this.user);
    console.log(this.age);
    console.log(tp);
}

print.call({user:'홍길동', age:30}, '학생', '직장인');
print.apply({user:'홍길동', age:30}, ['학생', '직장인']);


let rest = Array.prototype.slice.call([1,2,3,4,5], 1); //rest = [2,3,4,5]

_reduce([1,2,3,4,5],function(acum,val){
    return acum*val;
});

/**
 * function _reduce(list, iter, memo) {
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
위에서 iter는 인자를 누적값과 현재값을 받는 함수!
 */

let f = _pipe(function(a){return a+10},function(b){return b*10});
f(10); //200

let f1 = _pipe(a=>a+10,b=>b*10);
f1(10); //200


/**
 * _pipe는 함수들 넣고 거기에 인자를 넣어야 값이 출력되는 2단계를 걸침
 * _go는 인자와 함수들을 같이 넣어서 한 번만 입력하면 끝남.
 * 
 * _go(arg) : arg는 초기값과 함수들을 가짐 _go(1,f1,f2,f3) 이런느낌. 근데 _go는 인자를 1개밖에 받지 않기 때문에 
 * 가장 처음에 있는 1만 인자로 받음. 그렇기 때문에 나머지 f1,f2,f3를 인식하기 위해서는
 * arguments를 call해와야함. Array.Prototype.slice.call(argumnets,1) 를 하게되면 한개만 앞에서 슬라이스해서 배열로 [f1,f2,f3] 만들어줌. 
 */

function _go(arg){ //
    var fns = _rest(arguments); 
    return _pipe.apply(null, fns)(arg); //_pipe.call(null,fns)를 넣으면 call은 fns 자체를 인자 하나로 보내지만
    //_pipe.apply(null,fns)를 넣으면 fns[0], fns[1], 식으로 배열 인덱스로 0번째,1번째 각 각 보냄. 

}

_go(10,a=>a+10,b=>b*10); //200
