let finalScore = sessionStorage.getItem("userScore");

$('.points').append("النتيجه: "+ "<strong>"+finalScore+"</strong>" );
if (finalScore <= 3) {
  $("#statePic").empty().append('<img src="../pics/check.png" alt="correct">');
  $('.score').append("هنا الصوم واجب، ولا يجوز الترخص بالافطار، مالم تحصل مشقة، ومالم يحتاج المريض لتناول الدواء او الغذاء او الماء");
  // console.log("New index: "+ currentIndex)
  
} else if (finalScore > 3.5 && finalScore < 6) {

  $("#statePic").append('<img src="../pics/caution.png" alt="correct">');
  $('.score').append("هنا الصوم افضل مع جواز الاخذ برخصة الفطر في حال خوف المريض، بشرط مراجعة الطبيب للوضع الحالي، وخبرات المريض السابقة، وادويتة، وتوضيح احتمال الخطورة. ولو المريض اختار الصوم, لازم regular blood glocuse monitoring");
} else {
  $("#statePic").append('<img src="../pics/remove.png" alt="correct">');
  $('.score').append("هنا الاخذ برخصة واجب, لان المرض متوقع، والمتوقع كالواقع، وما قارب الشيئ أخذ حكمه.");
}