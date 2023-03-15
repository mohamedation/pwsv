function changeMessage() {
    var input = document.getElementById("password");
    var message = document.getElementById("message");
    var audio = new Audio('/inc/sound/ah-ah-ah.mp3');

    input.value = "!";
    message.style.visibility = "visible"
audio.play();
}