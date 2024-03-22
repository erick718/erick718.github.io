document.getElementById("date").innerHTML = "Today is: " + Date();

function welcomeUser() {
    let userName = document.getElementById("user-name").value;
    let userFeeling = document.getElementById("user-feeling").value;
    let welcomeText = `Ego Shark welcomes you, ${userName}!. We're glad you are doing ${userFeeling}!`;
    document.getElementById("welcome").innerHTML = welcomeText;
}

function getPolygon() {
    let userNum = document.getElementById("user-number").value;
    userNum = parseInt(userNum);
    userNum = Math.abs(userNum);
    if (isNaN(userNum) || userNum === null) {
        alert("Enter a number");
    } else if (userNum < 0 || userNum > 10) {
        alert("Enter a number from 0 to 10");
    } else {
        switch (userNum) {
            case 0:
                alert("");
                break;
            case 1:
                alert("Henagon");
                break;
            case 2:
                alert("Digon");
                break;
            case 3:
                alert("Trigon");
                break;
            case 4:
                alert("Tetragon");
                break;
            case 5:
                alert("Pentagon");
                break;
            case 6:
                alert("Hexagon");
                break;
            case 7:
                alert("Heptagon");
                break;
            case 8:
                alert("Octagon");
                break;
            case 9:
                alert("Enneagon");
                break;
            case 10:
                alert("Decagon");
                break;
        }
    }
}

function getMusic() {
    let userMusic = document.getElementById("music").value;
    if (userMusic.toLowerCase() === "yes") {
        document.getElementById("music-response").innerHTML = "That's awesome. Then you'll love Ego Shark!";
    } else if (userMusic.toLowerCase() === "no") {
        document.getElementById("music-response").innerHTML = "Ahh that's a bummer 😕";
    } else {
        document.getElementById("music-response").innerHTML = "Please answer the question";
    }
}

function favSong() {
    let userSong = document.getElementById("fav-song").value;
    if (userSong === "") {
        document.getElementById("song-response").innerHTML = "Please enter a song";
    } else {
        document.getElementById("song-response").innerHTML = `That's a amazing choice! I also love ${userSong}.`;
    }
}

function getSpotify() {
    document.getElementById("music-service").innerHTML = "The superior choice"
}

function getApple() {
    document.getElementById("music-service").innerHTML = "Solid Choice";
}

function getYoutube() {
    document.getElementById("music-service").innerHTML = "Solid Choice";
}

function getYes() {
    document.getElementById("yes-answer").innerHTML = "That's awesome";
}

function getNo() {
    document.getElementById("yes-answer").innerHTML = "WRONG! Choose again";
}