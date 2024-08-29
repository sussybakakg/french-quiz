const phrases = {
    "Bonjour! Comment ça va?": "مرحبا! كيف حالك؟",
    "Merci beaucoup!": "شكرا جزيلا!",
    "Je m'appelle [Your Name].": "اسمي [اسمك].",
    "Où est la bibliothèque?": "أين المكتبة؟",
    "Je voudrais un café, s'il vous plaît.": "أريد قهوة، من فضلك."
};

let currentPhrase = "";

function getRandomPhrase() {
    const keys = Object.keys(phrases);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}

function displayPhrase() {
    currentPhrase = getRandomPhrase();
    document.getElementById('phrase').textContent = currentPhrase;
    document.getElementById('userInput').value = "";
    document.getElementById('feedback').textContent = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById('userInput').value.trim();
    const correctAnswer = phrases[currentPhrase];
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "صحيح! أحسنت.";
    } else {
        document.getElementById('feedback').textContent = `خطأ! الإجابة الصحيحة هي: '${correctAnswer}'`;
    }
}

function nextPhrase() {
    displayPhrase();
}

// Initialize the game
window.onload = function() {
    displayPhrase();
};
