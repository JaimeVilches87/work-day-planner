$(document).ready(function () {


    var dateParagraph = $("#currentDay");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);

    console.log(todayDate);

});

var input_textarea1 = document.querySelector('#note1');
var save_button1 = document.querySelector('#saveNote1');



input_textarea1.value = localStorage.getItem('content1');

//when the Submit button is clicked, store the input of the textarea

saveNote1.addEventListener('click', updateOutput1);

//sets the input of text area into local storage

function updateOutput1() {
    localStorage.setItem('content1', input_textarea1.value);
};