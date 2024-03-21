document.getElementById("date").innerHTML = "Today is: " + Date();

function welcomeUser() {
    let userName = document.getElementById("name").value;
    let userFeeling = document.getElementById("feeling").value;
    let welcomeText = `Ego Shark welcomes you, ${userName}!. We're glad you are doing ${userFeeling}!`;
    document.getElementById("welcome").innerHTML = welcomeText;
}
