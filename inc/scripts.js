function changeMessage() {
    var input = document.getElementById("password");
    var message = document.getElementById("message");
    var audio = new Audio('inc/sound/ah-ah-ah.mp3');
    var form = document.getElementById("form-group");

    input.value = "!";
    input.blur();
    message.style.opacity = "1";
    form.classList.add("wiggle");
    audio.play();
}