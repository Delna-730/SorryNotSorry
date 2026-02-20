const excuses = {
    late: {
        teacher: [
            "I sincerely apologize, I had unexpected internet connectivity issues while submitting my assignment.",
            "There was a sudden family matter that required my attention yesterday evening."
        ],
        boss: [
            "I encountered a technical problem with my system that delayed the completion.",
            "I was dealing with an urgent personal situation that affected my schedule."
        ],
        friend: [
            "I completely lost track of time working on something else 😅",
            "I accidentally fell asleep earlier than planned."
        ]
    },
    meeting: {
        boss: [
            "I apologize, I had a calendar sync issue and missed the notification.",
            "I was caught up in an urgent task that ran longer than expected."
        ],
        teacher: [
            "I had connectivity problems during the scheduled time.",
            "I misunderstood the timing and sincerely apologize."
        ],
        friend: [
            "My phone was on silent and I didn’t notice!",
            "Something unexpected came up at home."
        ]
    },
    gym: {
        friend: [
            "I wasn’t feeling well today, so I decided to rest.",
            "My body was extremely sore from the last workout."
        ],
        boss: [
            "I had to finish some pending work instead.",
            "My schedule got overloaded today."
        ],
        teacher: [
            "I had academic work to complete urgently.",
            "I wasn’t feeling physically fit today."
        ]
    }
};


function generateExcuse() {

    const situation = document.getElementById("situation").value;
    const audience = document.getElementById("audience").value;

    const options = excuses[situation][audience];

    const excuse = options[Math.floor(Math.random() * options.length)];

    const confidence = Math.floor(Math.random() * 30) + 70;

    document.getElementById("result").innerText = "👉 " + excuse;
    document.getElementById("score").innerText = "Believability Score: " + confidence + "%";
}


// ✅ Cinematic intro runs when page loads
window.addEventListener("load", () => {

    setTimeout(() => {

        const intro = document.getElementById("intro");

        intro.classList.add("fade-out");

        setTimeout(() => {
            intro.style.display = "none";
        }, 1200);

    }, 5000); // 10 seconds
});