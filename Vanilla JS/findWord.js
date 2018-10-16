<script>
function findWord(word, string, ignoreCase) {
  if(ignoreCase){
    word = word.toLowerCase();
    string = string.toLowerCase();
  }
  return string.split(' ').some(function(w){return w === word})
}
</script>
