$(document).ready(function() {

  $("#datepicker").datepicker({
    onSelect: function(dateText) {
      var selectedDate = new Date(dateText);
      var newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 5);
      var dd = newDate.getDate();
      var mm = newDate.getMonth() + 1;
      var y  = newDate.getFullYear();
      var formattedNewDate = dd + '/' + mm + '/' + y;
      $('.text-box').text(formattedNewDate);
    }
  });


});
