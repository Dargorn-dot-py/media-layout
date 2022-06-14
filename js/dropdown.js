
$(document).on('click', function(event) {
   if (!$(event.target).closest('#menucontainer').length) {
      $("#dropdown").removeClass("show");
   } else {
      $("#dropdown").addClass("show");
   }
});

$(document).on('click', function(event) {
   if (!$(event.target).closest('#menucontainer-2').length) {
      $("#dropdown-2").removeClass("show");
   } else {
      $("#dropdown-2").addClass("show");
   }
});