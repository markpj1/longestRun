//longestRun.js

function longestRun (str) {
    var result = [],
    currentChar,
    previousChar = '',
    currentRun = 1,
    longestRun = 1,
    start = 0;

    for(var i = 0; i < str.length; i++) {
      console.log(str[i] + 'currentRun='+currentRun+' longestRun='+longestRun);
        currentChar = str[i];
        if(previousChar === currentChar) {
            currentRun++;
            if(currentRun > longestRun) {
                result[0] = start;
                result[1] = i;
                longestRun = currentRun;         
              } 
            } else {
              start = i;
            }
        }
        previousChar = currentChar;
    }
    return result;
}