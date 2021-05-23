$(document).ready(function () {
    var dateParagraph = $("#currentDay");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);

    console.log(todayDate);
    $(".saveBtn").on("click", function () {

        var time_block = $(this).siblings(".time-block").attr("id")
        console.log(time_block)
        var description = $(this).siblings(".description").val()
        console.log(description)
        localStorage.setItem(time_block, description);

    })

     $("#note1").val(localStorage.getItem("9"))
     $("#note2").val(localStorage.getItem("10"))
     $("#note3").val(localStorage.getItem("11"))
     $("#note4").val(localStorage.getItem("12"))
     $("#note5").val(localStorage.getItem("13"))
     $("#note6").val(localStorage.getItem("14"))
     $("#note7").val(localStorage.getItem("15"))
     $("#note8").val(localStorage.getItem("16"))
     $("#note9").val(localStorage.getItem("17"))

    function hourUpdate() {

        var now = new Date().getHours();
        // console.log(now)

        $(".time-block").each(function () {
            var rowHour = parseInt($(this).attr("id"))
            // console.log(rowHour)

            if (now > rowHour) {
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (now === rowHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    setInterval(hourUpdate, 500)
});
