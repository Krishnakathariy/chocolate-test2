const messages = [
    "You are my sweetest happiness! 💖",
    "I miss you more than chocolate! 🍫",
    "Every bite of chocolate reminds me of you! ❤️"
];

function showMessage(index) {
    document.getElementById("choco-message").innerText = messages[index];
}

function toggleMusic() {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
