<script>
function findWord(word, str) {
	word = word.toLowerCase();
  str = str.toLowerCase();
  return str.split(' ').some(function(w){return w === word})
}
</script>
