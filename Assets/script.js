var saveBtn = $(".saveBtn")
console.log(saveBtn)


//Adds current day and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

var currentTime = moment().hours();
var description = $(".description")


//sets color for present, past or furture timeblocks
description.each(function () {
    var timeBlock = parseInt($(this).attr("data-hour"));

    if (timeBlock === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
    else if (timeBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});

// $(document).ready(function() {
//     var hourSlots = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

//     $(".saveBtn").on("click", function (event) {
//         var textTime = 
//         var textPlans = $("#" + textTime).val();
//         console.log(textTime)
//         console.log(textPlans)
    
//         localStorage.setItem(textTime, textPlans);

//         function savePlans() {
//             for (let i = 0; i <= hourSlots.length; i++) {
//                 $("#" + hourSlots[i]).val(localStorage.getItem(hourSlots[i]));
//               }
//             }
//             savePlans();
//     });
// });


