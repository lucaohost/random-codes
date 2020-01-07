/*
 * Returns true if the word exists in certain string.
 * If the third parameter is passed as false, the
 * comparission will be case sensitive.
*/
function stringContains(word, string, ignoreCase = true) {
  if (ignoreCase) {
    word = word.toLowerCase();
    string = string.toLowerCase();
  }
  return string.search(word) > -1;
}
