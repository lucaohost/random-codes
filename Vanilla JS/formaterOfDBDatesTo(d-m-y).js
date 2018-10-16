<script>
function formatDBToDMYDates(){
    var obj = document.getElementsByClassName("myImputsWithDbDatesClass");
    for (var prop in obj) {
      var data = new Date(obj[prop].innerHTML + " 00:00:00");
      obj[prop].innerHTML = data.toLocaleDateString('en-GB');  
    }
}
</script>
