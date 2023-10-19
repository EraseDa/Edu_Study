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


