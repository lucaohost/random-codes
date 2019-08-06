/*
 * Returns true if the word exists in certain string.
 * If the third parameter is passed as true, the
 * comparission will be non case sensitive.
*/
function findWord(word, string, ignoreCase = true) {
  if (ignoreCase) {
    word = word.toLowerCase();
    string = string.toLowerCase();
  }
  return string.split(' ').some(function (w) { return w === word })
}
