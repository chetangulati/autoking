$("#nav li").click(function () {
  $("#nav li").removeClass('active');
  this.classList.add('active');
  $(".tab").removeClass("active");
  $(this.getAttribute('data-tab')).addClass("active");
})
