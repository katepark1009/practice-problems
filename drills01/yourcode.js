function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function fitWithinVal(arr, total) {
  var sum = 0;
  var result = [];
  for (i = 0; i < arr.length; i++) {
    if (sum + arr[i] <= total) {
      sum = sum + arr[i];
      result.push(arr[i]);
    }
  }
  return result;
}

function getAllNamesShorterThan(arr, num) {
  var newNameArray = [];
  for (var i = 0; i < arr.length; i++) {
    var letterCounts = arr[i].length;
    if (letterCounts < num) {
      newNameArray.push(arr[i]);
    }
  }
  return newNameArray;
}

function makeLabel(obj) {
  var newString = `${obj.greeting} ${obj.givenName} ${obj.familyName}\n${
    obj["home address"]["streetNumber"]
  } ${obj["home address"]["streetName"]}\n${obj["home address"]["city"]}, ${
    obj["home address"]["state"]
  } ${obj["home address"]["zip"]}`;
  return newString;
}
