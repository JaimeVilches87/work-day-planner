$(document).ready(function () {


    var dateParagraph = $("#currentDay");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);

    console.log(todayDate);

});

// var input_textarea1 = $('#note1');
// var save_button1 = $('#saveNote1');
// input_textarea1.value = localStorage.getItem('content1');

// saveNote1.addEventListener('click', updateOutput1);

// function updateOutput1() {
//     localStorage.setItem('content1', input_textarea1.value);
// };

$(".saveBtn").on("click", function () {

    var time_block = $(this).siblings(".time-block").attr("id")
     console.log(time_block)
    var description = $(this).siblings(".description").val()
    console.log(description)
    localStorage.setItem(time_block, description);


})

$(".description").each(function() {
    
    $(".description").val(localStorage.getItem(".time_block"))
    
    // $("#note1").val(localStorage.getItem("9AM"))
})

var now= new Date().getHours();
var test = $(".time-block").attr("id");

console.log(test)

if (now > test) {
    $(".description").addClass("past");
	}	
    else if (now >= test && now < test++) {
        $(".description").addClass("present");
	}
    else if (now < test) {
        $(".description").addClass("future");
	}

    
//    var now= new Date().getHours();

// if (now > 9) {
//     $("#note1").addClass("past");
// 	}	
//     else if (now >= 9 && now < 10) {
//         $("#note1").addClass("present");
// 	}
//     else if (now < 9) {
//         $("#note1").addClass("future");
// 	}

// if (now > 10) {
//     $("#note2").addClass("past");
// 	}
//     else if (now >= 10 && now < 11) {
//         $("#note2").addClass("present");
// 	}
//     else if (now < 10) {
//         $("#note2").addClass("future");
// 	}

// if (now > 11) {
//     $("#note3").addClass("past");
// 	}
//     else if (now >= 11 && now < 12) {
//         $("#note3").addClass("present");
// 	}
//     else if (now < 11) {
//         $("#note3").addClass("future");
// 	}

// if (now > 12) {
//     $("#note4").addClass("past");
// 	}
//     else if (now >= 12 && now < 13) {
//         $("#note4").addClass("present");
// 	}
//     else if (now < 12) {
//         $("#note4").addClass("future");
// 	}

// if (now > 13) {
//     $("#note5").addClass("past");
//     }
//     else if (now >= 13 && now < 14) {
//         $("#note5").addClass("present");
//     }
//     else if (now < 13) {
//         $("#note5").addClass("future");
//     }

// if (now > 14) {
//     $("#note6").addClass("past");
//     }
//     else if (now >= 14 && now < 15) {
//         $("#note6").addClass("present");
//     }
//     else if (now < 14) {
//         $("#note6").addClass("future");
//     }

// if (now > 15) {
//     $("#note7").addClass("past");
// 	}
//     else if (now >= 15 && now < 16) {
//         $("#note7").addClass("present");
// 	}
//     else if (now < 15) {
//         $("#note7").addClass("future");
// 	}

// if (now > 16) {
//     $("#note8").addClass("past");
// 	}
//     else if (now >= 16 && now < 17) {
//         $("#note8").addClass("present");
// 	}
//     else if (now < 16) {
//         $("#note8").addClass("future");
// 	}

// if (now > 17) {
//     $("#note9").addClass("past");
// 	}
//     else if (now >= 17 && now < 18) {
//         $("#note9").addClass("present");
// 	}
//     else if (now < 17) {
//         $("#note9").addClass("future");
// 	}