var saveBtn = $(".saveBtn")

//Adds current day and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

var currentTime = moment().hours();
var description = $(".description")

//sets color for present, past or furture timeblocks
description.each(function () {
    var timeBlock = parseInt($(this).attr("id"));

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
































