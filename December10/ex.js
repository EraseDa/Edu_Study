// 순수함수
function add(a, b) {
    return a + b;
}
console.log( add(1, 5) );
console.log( add(1, 5) );
console.log( add(1, 5) );
/* 동일한 인자값을 전달하면 결과값이 항상 동일함 
   함수가 리턴 결과값을 만드는 것 외에 외부의 상태에 영향을 미치지 않음(부수효과가 없음)
   언제 실행해도(언제 평가되도) 상관없이 결과값이 동일하다. 
*/

var c = 10;
function add2(a, b) {
    return a + b + c;
}
console.log( add2(1, 5) );
console.log( add2(1, 6) );
console.log( add2(1, 7) );

console.log( add2(1, 5) );
console.log( add2(1, 6) );
console.log( add2(1, 7) );

/* 만약 c가 상수라면 아래의 add2도 순수함수이다.
하지만 c는 바꿀 수 있기 때문에 순수함수가 아님.
만약 const c 였으면 어땠을까? 
*/

var c = 30; 
function add3(a, b) {
    c = b;
    return a + b;
}
/*add3 함수가 순수함수가 아닌 이유는
동일한 인자를 넣었을 때 리턴값이 같더라도
외부에 있는 변수c에게 영향을 주기 때문이다.
부수효과가 있는 함수!!*/

console.log("원래의 c값 : ", c); //30
console.log( add3(1, 5) );
console.log("바뀐 c값 : ", c); //5

var obj1 = { val : 10 };
function add4(obj, b) {
    obj.val += b;
}
console.log(obj1.val); //10
add4(obj1,20);
console.log(obj1.val); //30

/* add4는 순수함수가 아님 
add4와 비슷하게 생겼지만 순수함수인 add5를 만들어보자*/

var obj1 = { val : 10 };
function add5(obj, b) {
    return { val : obj.val + b }
}

console.log(obj1); //10
add5(obj1, 20);
var obj2 = add5(obj1,20); //30
console.log(obj2);


/*일급 함수 : 함수를 값으로 정의할 수 있다. */
var f1 = function(a) { return a * a; };
console.log(f1);

var f2 = add;
console.log(f2);

function f3(f) {
    return f();
}
console.log(f3(function(){return 10;})); //10

/*add maker - 순수함수이자 일급함수*/

function add_maker(a) {
    return function(b){
        return a + b;
    }
}

var add10 = add_maker(10);
console.log(add10(20));

var add30 = add_maker(30);
console.log(add30(20));

function f4(f1,f2,f3) {
    return f3(f1() + f2());
}

var rslt = f4(function(){return 10;}, function(){return 20;}, function(a){return a*a});
console.log(rslt);

