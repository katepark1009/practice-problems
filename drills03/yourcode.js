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
function getPath(str){
    var splitStr = str.split("/");
    return splitStr;
}

// Given a full URL string, break it up into parts in an object For example: 'http://localhost:8000/happy/go/lucky/file.html' would return { protocol: 'http', host: 'localhost', port: 8000, path: '/happy/go/lucky', file: 'file.html' }

function getPathParts(str){
    var splitPath = str.split("://");
    console.log("split by ://", splitPath);
    //["http", "localhost:8000/happy/go/lucky/file.html"]
    var protocol = splitPath[0];
    protocol= protocol.toString();
    console.log("protocol: ", protocol); //"http"
    var splitPath2 = splitPath[1];

    splitPath2 = splitPath2.toString();
    splitPath2 = splitPath2.split(":");
    var host = splitPath2[0];
    host = host.toString();
    console.log("split by :", splitPath2);
    console.log("host :", host);

    var splitPath3 = splitPath2[1];
    splitPath3 = splitPath3.toString();
    var newSplitPath3 = splitPath3.split("/");
    console.log("split by /", newSplitPath3);
    var port = newSplitPath3[0];
    port = Number(port);
    console.log("port :", port);
    var file = newSplitPath3[ newSplitPath3.length -1];
    file = file.toString();
    console.log("file :", file);
    var value = '';
    for(var i = 1 ; i < newSplitPath3.length -1 ; i++) {
        var newPath = newSplitPath3[i].toString();
        if(i === newSplitPath3.length -2) {
            value += newPath;
        } else {
            value += newPath+"/" };
        console.log("val",value);   
    }
    console.log("total path", value);

    var result = {
        "protocol": protocol, 
        "host": host,
        "port": port,
        "path": value,
        "file": file 
    };
    console.log(result);
    return result;
}

// getCapitalCount: given an array of words, return a count of how many start with capital letters, 
//For example: ['it','will','not','Be','long','Till','we','Are'] returns: 3
function getCapitalCount(arr){
    var count =0;
    for (var i = 0 ; i < arr.length; i++){
        var word = arr[i];
        var getCapital = word.split("");
        var firstLetter = getCapital[0];
        if (firstLetter.toUpperCase() == firstLetter){
        count++;
        }
    }
    return count;
}

function correctCalcChecker(){

}

function doMath(){

}
