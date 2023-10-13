//컬렉션 중심 프로그래밍의 4가지 유형과 함수

//1. 수집하기 - map, values, pluck 등
//2. 거르기 - filter, reject, compact, without 등
//3. 찾아내기 - find, some, every 등
//4. 접기 - reduce, min, max, group_by, count_by 



var users = [
    { id : 1, name : "AB", age : 10},
    { id : 2, name : "CD", age : 11},
    { id : 3, name : "EF", age : 84},
    { id : 4, name : "GH", age : 55},
    { id : 5, name : "IJ", age : 45},
    { id : 6, name : "KL", age : 56},
    { id : 7, name : "MN", age : 15},
    { id : 8, name : "OP", age : 20}
];

// 컬렉션 중심 프로그래밍의 유형별 함수 만들기

//1. 수집하기 - map

console.log(
    _map(users, function(user){
        return user.name;
    })
);
    //1. values (key:value 쌍으로 되어있는 데이터에 적함)
    function _identity(val){
        return val;
    }

    function _values(data){
        return _map(data,_identity)
    };

    console.log(
        _values(users[0])
    );

    var values = _map(_identity);
    values(users[0]);

    //2. pluck (배열, 키) 를 인자로 주었을 때 해당하는 배열의 키 값들을 꺼내 배열로 만듦

    function _pluck(data, key){
        return _map(data, _get(key));
    };

//2. 거르기 - filter

_filter(users, user=>user.age>=30);

    //1. reject : 필터가 해당하는 predi가 참인 값을 추출하는 거라면 
    //reject는 해당하는 predi와 일치하지 않는 것을 추출하는 것.

    function _negate(func){
        return function (val){
            return !func(val);
        }
    };
    
    
    function _reject(data,predi){
        return _filter(data,_negate(predi));
    };

    //2. compact : true 값만 남는 함수

    console.log(_compact([1,2,0,null,false,{}])); // [1,2,0,{}]

    var _compact = _filter(_identity);