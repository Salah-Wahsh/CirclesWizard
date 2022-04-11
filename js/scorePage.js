let finalScore = sessionStorage.getItem("userScore");

$('.points').append("النتيجه: "+ "<strong>"+finalScore+"</strong>" );
if (finalScore <= 3) {
  $("#statePic").empty().append('<img src="../pics/check.png" alt="correct">');
  $('.score').append("لا ضرر من الصيام");
  // console.log("New index: "+ currentIndex)
  
} else if (finalScore > 3.5 && finalScore < 6) {

  $("#statePic").append('<img src="../pics/caution.png" alt="correct">');
  $('.score').append("الأخذ برخصة واجب، والأفضل مراجعة طبيبك");
} else {
  $("#statePic").append('<img src="../pics/remove.png" alt="correct">');
  $('.score').append("ممنوع الصيام والأفضل مراجعة الطبيب");
}