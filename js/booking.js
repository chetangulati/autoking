function tags() {
  var a = $('#skill-input');
  var txt = a.val().replace(/[^a-z0-9\+\-\.\#\s]/ig,''); // allowed characters
  if(txt) $("<span class='tag'>"+ txt +"</span><input role='tag' class='taginp' type='hidden' value='"+ txt +"' ></input>").insertBefore($("#skillhidden"));
    a.val("");
}
function req() {
  var a = $('#req-input');
  var txt = a.val().replace(/[^a-z0-9\+\-\.\#\s]/ig,''); // allowed characters
  if(txt) $("<span class='tag'>"+ txt +"</span><input role='tag' class='reqinp' type='hidden' value='"+ txt +"' ></input>").insertBefore($("#reqhidden"));
    a.val("");
}


$(function(){
  $("#skill-input").on({
    focusout: function(){ tags()},
    click : function(){ tags()},
    keyup : function(ev) {
      // if: comma|enter (delimit more keyCodes with | pipe)
      if(/(188|13)/.test(ev.which)) $(this).click();
    }
  });
  $("#req-input").on({
    focusout: function(){ req()},
    click : function(){ req()},
    keyup : function(ev) {
      // if: comma|enter (delimit more keyCodes with | pipe)
      if(/(188|13)/.test(ev.which)) $(this).click();
    }
  });

$('.requirements').on('click', 'span', function() {
  $(this).next().remove();
  $(this).remove();
});

  $('.skills').on('click', 'span', function() {
    $(this).next().remove();
    $(this).remove();
  });
});


// $(".feecal").bind('click keyup',function () {
//   if($('#fee').val().length != 0 && $("input[name='feefreq']").is(":checked"))
//   {
//     $("#chk").val("filled");
//     var fee = $("#fee").val();
//     var reg = $("#regfee span");
//     if ($("input[name='feefreq']:checked").val() == "Course") {
//       if (fee <= 1000) {
//         reg.html("&#8377\; 150");
//       }
//       else if (fee > 1000 && fee <= 5000 ) {
//         reg.html("&#8377\; 300");
//       }
//       else if (fee > 5000) {
//         reg.html("&#8377\; 500");
//       }
//     }
//     else if ($("input[name='feefreq']:checked").val() == "Month") {
//       if (fee <= 500) {
//         reg.html("&#8377\; 100");
//       }
//       else if (fee >= 500 && fee <= 1000 ) {
//         reg.html("&#8377\; 200");
//       }
//       else if (fee >= 1000) {
//         reg.html("&#8377\; 300");
//       }
//     }
//   }
// });

var bigValueSlider = document.getElementById('time-slider'),
startSpan = document.getElementById('start-time');
endSpan = document.getElementById('end-time');

noUiSlider.create(bigValueSlider, {
  start: [5,6],
  connect: true,
  	step: 1,
    margin: 1,
  	format: wNumb({
  		decimals: 0
  	}),
  	range: {
  		min: 0,
  		max: 12
  	}
});



var range = [
  '9:00 AM','10:00 AM','11:00 AM',
  '12:00 PM','1:00 PM','2:00 PM','3:00 PM',
  '4:00 PM','5:00 PM','6:00 PM','7:00 PM',
  '8:00 PM','9:00 PM'
];

bigValueSlider.noUiSlider.on('update', function ( values, handle ) {
  if (handle) {
    endSpan.innerHTML = range[values[handle]];
  }
  else {
    startSpan.innerHTML = range[values[handle]];
  }
});


// location
$('.stepbtn').click(function () {
  var href = $(this).attr("data-href");
  var valid = true;
 if ($(this).is($("#btnone"))) {
    join(".taginp", "#skillhidden");
    join(".reqinp", "#reqhidden");
  }
  var req = $($(this).attr("data-step")).find(".req");
  for (var i = 0; i < req.length; i++) {
    if ($(req[i]).val().length == 0) {
      valid = false;
      break;
    }
  }
  if (valid) {
    $(".step").removeClass("active");
    $(href).addClass("active");
    window.location.hash = href;
  }
  else{
    alert("Please fill in all the feilds");
  }
});
$(".back").click(function() {
  window.history.back();
  var loc = window.location.hash;
  $(".step").removeClass("active");
  $(loc).addClass("active");
  if (loc == "") {
    $("#one").addClass("active");
  }
});


function perline() {
  var loc = window.location.hash;
  if (loc == "#two") {
    $("#percline").css("width","33.334%");
    $(".step").removeClass("active");
    $(loc).addClass("active");
  }
  else if (loc == "#three") {
    $("#percline").css("width","50%");
    $(".step").removeClass("active");
    $(loc).addClass("active");
  }
  else if (loc == "#four") {
    $("#percline").css("width","66.668%");
    $(".step").removeClass("active");
    $(loc).addClass("active");
  }
  else if (loc == "#five"){
    $("#percline").css("width","83.335%");
    $(".step").removeClass("active");
    $(loc).addClass("active");
  }
  else if (loc == "#six"){
    $("#percline").css("width","100%");
    $(".step").removeClass("active");
    $(loc).addClass("active");
  }
  else{
    $("#percline").css("width","16.667%");
    $(".step").removeClass("active");
    $("#one").addClass("active");
  }
  $(".step").removeClass("active");
  if (loc == "#" || loc == "") {
    $("#one").addClass("active")
  }
  else {
    $(loc).addClass("active");
  }
}
$(window).on('hashchange', function () {
  perline();
});

//join skills and requirements

function join(taginp, hiddeninp) {
  var arr = [];
  var a = $(taginp);

  for (var i = 0; i < a.length; i++) {
    arr[i] = $(a[i]).val();
  }
  $(hiddeninp).attr('value',arr.join(", "));
}

//allow onlu numbers
$(document).ready(function () {
  $("input[data-inp=number]").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
  });

//check last step and send the data
$("#submit").click(function () {
  if ($("input[name=mobile]").val().length == 0) {
    alert("Mobile Number is required");
  }
  else if ($("input[name=email]").val().length == 0) {
    alert("E-mail is required");
  }
  else if (!$("input[name=terms]").is(":checked")) {
    alert("Please accept terms and conditions");
  }
  else {
    alert("success");
  }
});
