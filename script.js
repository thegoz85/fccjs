function findLongestWord(str) {
  var words = str.split(" ");
  var arrayLength = words.length;
  var longestSoFar = null;
  for (i = 0; i < arrayLength; i++) {
      if (words[i].length > longestSoFar){
          longestSoFar = words[i].length;
      }
  }
  return longestSoFar;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
