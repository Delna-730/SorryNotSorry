async function generateExcuse() {
    const situation = document.getElementById("situation").value;
    const audience = document.getElementById("audience").value;
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    if (!situation.trim()) {
        resultDiv.innerText = "Please type a situation first!";
        return;
    }

    resultDiv.innerText = "Analyzing variables... 🧠";
    scoreDiv.innerText = "";

    try {
        const response = await fetch("http://localhost:3000/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ situation, audience })
        });

        const data = await response.json();

        if (data.excuse) {
            const text = data.excuse;
            resultDiv.innerText = "";
            let i = 0;

            // Typewriter effect
            function type() {
                if (i < text.length) {
                    resultDiv.innerText += text.charAt(i);
                    i++;
                    setTimeout(type, 25);
                } else {
                    const confidence = Math.floor(Math.random() * 21) + 78;
                    scoreDiv.innerText = `Believability Score: ${confidence}%`;
                }
            }
            type();
        } else {
            resultDiv.innerText = "Error: " + (data.error || "Could not generate.");
        }
    } catch (error) {
        resultDiv.innerText = "Server is offline. Check your terminal!";
    }
}

// Intro auto hide
window.addEventListener("load", () => {
    setTimeout(() => {
        const intro = document.getElementById("intro");
        if(intro) {
            intro.classList.add("fade-out");
            setTimeout(() => { intro.style.display = "none"; }, 1200);
        }
    }, 4000);
});