var input_array = [5,3,2,5,1];
var newArray = [];

function randomize_list(arr) {
    var arrayLength = input_array.length;
    for ( var i = 0 ; i < arrayLength ; i++ ) {
     var randomIndex = Math.floor(Math.random(arr.length));
     var randomNum = input_array.pop(randomIndex);
        newArray.push(randomNum);
    }
    return newArray;
}

console.log(randomize_list(input_array));