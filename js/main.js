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
$('#modalBtntwo').click(function () {
  $("#two").addClass('active');
});
$('#modalBtnfour').click(function () {
  $("#four").addClass('active');
});

$(".close").click(function () {
  $(".bookingModal").removeClass('active');
})
$('#modalBtnfour').click(function () {
  $(".bookingModal").addClass('active');
});
