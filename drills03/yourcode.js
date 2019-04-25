// - getPath: given a path string, return an array with the different parts of the path for
// 	- example: 'folder1/folder2/folder3'
// 	- returns ['folder1','folder2','folder3']
/*
1.declare variable named splitSrt
2. use .split method and  argument will be "/", 
3. "/"는 없어지고 나머지는 string으로 바뀌며 Array로 저장됨
cf) split() method is used to split a string into an array of substrings, and returns the new array.
If an empty string ("") is used as the separator, the string is split between each character.
3. 
*/
function getPath(str) {
  var splitStr = str.split("/");
  return splitStr;
}

// Given a full URL string, break it up into parts in an object For example: 'http://localhost:8000/happy/go/lucky/file.html' would return { protocol: 'http', host: 'localhost', port: 8000, path: '/happy/go/lucky', file: 'file.html' }

function getPathParts(str) {
  var splitPath = str.split("://");
  var protocol = splitPath[0];
  protocol = protocol.toString();
  var splitPath2 = splitPath[1];
  splitPath2 = splitPath2.toString();
  splitPath2 = splitPath2.split(":");
  var host = splitPath2[0];
  host = host.toString();
  var splitPath3 = splitPath2[1];
  splitPath3 = splitPath3.toString();
  var newSplitPath3 = splitPath3.split("/");
  var port = newSplitPath3[0];
  port = Number(port);
  var file = newSplitPath3[newSplitPath3.length - 1];
  file = file.toString();
  var value = "";
  for (var i = 1; i < newSplitPath3.length - 1; i++) {
    var newPath = newSplitPath3[i].toString();
    if (i === newSplitPath3.length - 2) {
      value += newPath;
    } else {
      value += newPath + "/";
    }
  }
  var result = {
    protocol: protocol,
    host: host,
    port: port,
    path: value,
    file: file
  };
  return result;
}

// getCapitalCount: given an array of words, return a count of how many start with capital letters,
//For example: ['it','will','not','Be','long','Till','we','Are'] returns: 3
function getCapitalCount(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var getCapital = word.split("");
    var firstLetter = getCapital[0];
    if (firstLetter.toUpperCase() == firstLetter) {
      count++;
    }
  }
  return count;
}
// correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations for example: [ { num1: 3, num2: 3, op: '/', result: 3}, { num1: 12, num2: 4, op: '-', result: 8}, { num1: 2, num2: 3, op: '+', result: 5}, { num1: -5, num2: -2, op: '*', result: 10} ] returns [ { num1: 12, num2: 4, op: '-', result: 8}, { num1: 2, num2: 3, op: '+', result: 5} ]
function correctCalcChecker(arr) {
  var rightAnswerObj = [];
  for (var i = 0; i < arr.length; i++) {
    var test = arr[i];
    var num1 = arr[i].num1;
    var num2 = arr[i].num2;
    var op = arr[i].op;
    var result = arr[i].result;
    var compareResult = 0;
    if (op === "+") {
      compareResult = num1 + num2;
      if (result == compareResult) {
        rightAnswerObj.push(test);
      }
    } else if (op === "-") {
      compareResult = num1 - num2;
      if (result == compareResult) {
        rightAnswerObj.push(test);
      }
    } else if (op === "*") {
      compareResult = num1 * num2;
      if (result == compareResult) {
        rightAnswerObj.push(test);
      }
    } else if (op === "/") {
      compareResult = num1 / num2;
      if (result == compareResult) {
        rightAnswerObj.push(test);
      }
    }
  }
  return rightAnswerObj;
}

function doMath() {}
