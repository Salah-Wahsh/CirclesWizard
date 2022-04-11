let total = [];
let score = 0;
currIndex = 0;
indexNew = 0;
let totalScore=0;

// $("#wizard .actions a[href='#previous']").hide();
$(function () {
    $("#wizard").steps({
        
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        onInit: function(event, currentIndex){
            $("#wizard .actions a[href='#next']").hide();
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            currIndex = currentIndex;
            indexNew = newIndex;
            newIndex < currentIndex ? minusResult() : saveResult();
            $("#wizard .actions a[href='#next']").hide();
            if (newIndex === 1) {
                $("#wizard .actions a[href='#next']").hide();
                $(".steps ul").addClass("step-2");
            } else {
                $(".steps ul").removeClass("step-2");
            }
            if (newIndex === 2) {
                $(".steps ul").addClass("step-3");
            } else {
                $(".steps ul").removeClass("step-3");
            }
            if (newIndex === 3) {
                $(".steps ul").addClass("step-4");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-4");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 4) {
                $(".steps ul").addClass("step-5");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-5");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 5) {
                $(".steps ul").addClass("step-6");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-6");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 6) {
                $(".steps ul").addClass("step-7");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-7");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 7) {
                $(".steps ul").addClass("step-8");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-8");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 8) {
                $(".steps ul").addClass("step-9");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-9");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 9) {
                $(".steps ul").addClass("step-10");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-10");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 10) {
                $(".steps ul").addClass("step-11");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-11");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 11) {
                $(".steps ul").addClass("step-12");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-12");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 12) {
                $(".steps ul").addClass("step-13");
                $(".actions ul").addClass("step-last");
            } else {
                $(".steps ul").removeClass("step-13");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 13) {
                $(".steps ul").addClass("step-14");
                $(".actions ul").addClass("step-last");
                // $('#wizard').find('a[href="#finish"]').remove();

            } else {
                $(".steps ul").removeClass("step-14");
                $(".actions ul").removeClass("step-last");
            }
            if (newIndex === 14) {
                totalScore=getTotalScore();
                console.log("total"+ totalScore)
                startSession();
                window.location.replace("../pages/score.html");
                $(".steps ul").addClass("step-15");
                $(".actions ul").addClass("step-last");
                
            } else {
                $(".steps ul").removeClass("step-15");
                $(".actions ul").removeClass("step-last");
            }

            return true;
        },
        labels: {
            next: "التالى",
            previous: " ",
            finish: "اعادة الاختبار",
        },
        onFinished: function (event, currentIndex) {
            $("#wizard-t-0").get(0).click();
            // $('#last').remove();
            // console.log("before score"+ score)
          },
          
    });

    // Custom Steps Jquery Steps
    $(".wizard > .steps li a").click(function () {
        $(this).parent().addClass("checked");
        $(this).parent().prevAll().addClass("checked");
        $(this).parent().nextAll().removeClass("checked");
    });
    // Custom Button Jquery Steps

    
    $(".forward").click(function () {
        $("#wizard").steps("next");
    });
    $("#previous").click(function () {
        $("#wizard").steps("previous");
    });
    // Checkbox
    $(".checkbox-circle label").click(function () {
        $(".checkbox-circle label").removeClass("active");
        $(this).addClass("active");
    });
    $(document).on('change', 'input[name="flexRadioDefault"]', function () {
        $("#wizard").steps("next");
    })
});

function startSession(){
    sessionStorage.setItem("userScore", totalScore);
    var i;

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}

}
function selectValue(score) {
    $('#selected-value').val(score)
}

function saveResult() {
    if (currIndex == total.length) {
        total.push(parseInt($('#selected-value').val()));
        $('#selected-value').val(0)
    }
}

function minusResult() {
    total.pop();
}

function getTotalScore() {
    return total.reduce((a, b) => a + b, 0);
}