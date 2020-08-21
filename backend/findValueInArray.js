let array = ["x", "y", 5, 9, 15, 23, "z"];

function findValue(array) {
  var indexToFindValue = [];
  var keyResult = [];
  var valueResult = [];

  var i;
  for (i = 0; i < array.length; i++) {
    if (!Number.isInteger(array[i])) {
      indexToFindValue.push(i);
      keyResult.push(array[i]);
      valueResult.push(null);
    }
  }
  
  while (indexToFindValue.length > 0) {
    var tempIndexToFindValue = indexToFindValue;
    indexToFindValue = [];

    i = 0;
    for (i = 0; i < tempIndexToFindValue.length; i++) {
      var j = tempIndexToFindValue[i];

      if (Number.isInteger(array[j+1])) {
        var result = array[j+1] - Math.pow(2, j);
        valueResult[i] = result;
        array[j] = result;
      } else if (Number.isInteger(array[j-1])) {
        var result = array[j-1] + (2 * (j-1));
        valueResult[i] = result;
        array[j] = result;
      } else {
        indexToFindValue.push(j);
      }
    }
  }

  i = 0;
  for (i = 0; i < keyResult.length; i++) {
    console.log(keyResult[i] + " is " + valueResult[i]);
  }
}

findValue(array);