var startBtn = $("#startbtn")


   startBtn.on("click", function() {
    $( "#title" ).fadeOut(700);
    $( "#firstQuestion" ).delay(800).fadeIn(800);
  });

