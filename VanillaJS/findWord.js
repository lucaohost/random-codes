/*
 *returns true if the word exists in certain string
 *if the third parameter is passed as false,the case
 *of the word isn't ignored.
*/
function findWord(word, string, ignoreCase = true) {
  if(ignoreCase){
    word = word.toLowerCase();
    string = string.toLowerCase();
  }
  return string.split(' ').some(function(w){return w === word})
}
