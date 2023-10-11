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

//1. 명령형 코드
    // 1. 30세 이상인 user를 거른다.
    var temp_users = [];
    for ( var i=0; i<users.length; i++) {
        if(users[i].age >= 30) {
            temp_users.push(users[i]);
        }
    }

    console.log(temp_users);
    // 2. 30세 이상인 users의 names를 수집한다.
    var names = [];
    for(var i = 0; i <temp_users.length; i++) {
        names.push(temp_users[i].name);
    }
    console.log(names);
    // 3. 30세 미만인 users를 거른다.
    var temp_users2 = [];
    for ( var i=0; i<users.length; i++) {
        if(users[i].age < 30) {
            temp_users2.push(users[i]);
        }
    }

    console.log(temp_users2);
    // 4. 30세 미만인 users의 ages를 수집한다.
    var ages = [];
    for(var i = 0; i <temp_users2.length; i++) {
        ages.push(temp_users2[i].age);
    }
    console.log(ages);
// 2. _filter, _map으로 리팩터링

function _filter(list, predi) {
    var new_list = [];
    for (var i=0; i<list.length; i++) {
        if(predi(list[i])) {
            new_list.push(list[i]);
        }
    }
    return new_list;
}
var over30 =  _filter(users, function(users){
    return users.age>=30;
})

var under30 = _filter(users, function(users){
    return users.age<30;
});
console.log(over30);
console.log(under30);
// console.log(
//     _filter([12,44,32,67,88],function(num){return num%2; })
// )
// console.log(
//     _filter([12,44,32,67,88],function(num){return !(num%3); })
// )


function _map(list, mapper){
    var new_list = [];
    for(var i = 0; i <list.length; i++) {
        new_list.push(mapper(list[i]));
    }
    return new_list;
}

var over30_name = _map(over30, function(user){
    return user.name;
});

console.log(over30_name);

var over30_age = _map(over30, function(user){
    return user.age;
})

console.log(over30_age);

var under30_age = _map(under30, function(user){
    return user.age;
})

console.log(under30_age);

console.log(_map([1,30,22,47], function(num){return num*2;}));