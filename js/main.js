function sideNav() {
  $("#sideNav").toggleClass('open');
  $("#filterSideNav").toggleClass('open');
}

$('.menuBtn').click(function () {
  sideNav();
});

$('#filterSideNav').click(function (e) {
  sideNav();
});
$('#modalBtn').click(function () {
  $(".bookingModal").addClass('active');
});
$("#close").click(function () {
  $(".bookingModal").removeClass('active');  
})
