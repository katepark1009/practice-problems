function countOccurences(arr, str) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      total = total + 1;
    }
  }
  return total;
}

function wordLengths(arr) {
  var newArrayWithChaNum = [];
  for (i = 0; i < arr.length; i++) {
    var chaNum = arr[i].length;
    newArrayWithChaNum.push(chaNum);
  }
  return newArrayWithChaNum;
}

function getMinMaxMean(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  var mean = total / arr.length;
  var result = {
    min: min,
    max: max,
    mean: mean
  };
  return result;
}

function findMode(sortedArray) {
  var count = 1;
  var m = 0;
  var item;
  for (var i = 0; i < sortedArray.length; i++) {
    for (var j = i; j < sortedArray.length; j++) {
      if (sortedArray[i] == sortedArray[j]) {
        m++;
      }
      if (count <= m) {
        count = m;
        item = sortedArray[i];
      }
    }
    m = 0;
    console.log(item + " ( " + count + " times ) ");
  }
  console.log("count", count);
  console.log("item", item);
  return item;
}
