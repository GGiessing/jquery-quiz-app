//step1 function and object definitions
//this function will start the quiz?
function beginQuiz() {
    //alert("begin quiz was fired");

}
//resetQuiz will reload the page
function resetQuiz() {
    alert("reset quiz was fired");
}
//this function will update
function nextQuestion() {

}



//step2 function and object usage
$('#js-begin').on('click', function (event) {
    //console.log("blah");
    //event.preventDefault();
    beginQuiz();
});

$('#js-reset').on('click', function (event) {
    //console.log("blaj");
    resetQuiz();
});
