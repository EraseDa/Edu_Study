function _filter(list,predi) {
    var new_list = [];
    _each(list,function(val){
        if(predi(val)){new_list.push(val);}
    });
    return new_list;
}

function _each(list, iter) {
    for(var i = 0; i < list.length; i++) {
        iter(list[i]);
    }
    return list;
}

function _map(list,mapper) {
    var new_list=[];
    _each(list, function(val){new_list.push(mapper(val));});
    return new_list;
}


console.log(
    _map([1,2,3,4,5], function(val){return val*2})
);

console.log(
    _filter([1,2,3,4,5], function(val){return val%2})
);