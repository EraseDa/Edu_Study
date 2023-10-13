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


console.log(
    _map(_filter(users, function(user){return user.age>=30;}),_get('name'))
);


console.log(
    _map(_filter(users, function(user){return user.age<30;}),
    _get('age'))
);

_go(users,
    function(users){
        return _filter(users, function(user){
            return user.age>=30;
        });        
    },
    function(over30){
        return _map(over30, _get('name'));
    },
    console.log);

_go(users,
    function(user){
        return _filter(user, function(user){
            return user.age<30;
        })
    },
    function(under30){
        return _map(under30, _get('age'))
    },
    console.log);

//curryr씌운 버전

_go(users,
    _filter(function(user){ return user.age>=30;}),
    _map(_get('name')),
    console.log
)

_go(users,
    _filter(user=>user.age<30),
    _map(_get('age')),
    console.log
)

_go(users,
    _filter(user=>user.age<30),
    _map(user=>user.age),
    console.log
)
