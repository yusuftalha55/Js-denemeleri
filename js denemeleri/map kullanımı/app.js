let arr = [3,4,5,6];
typeof(arr(0));

let modifiedArr = arr.map(function(element){
    return element *3;

});



console.log(modifiedArr);

arr.forEach(function(ar){
    ar *= 3;

})