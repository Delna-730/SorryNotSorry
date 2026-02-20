async function generateExcuse() {

    const situation = document.getElementById("situation").value;
    const audience = document.getElementById("audience").value;

    try {

        const response = await fetch("http://localhost:3000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ situation, audience })
        });

        const data = await response.json();

        const confidence = Math.floor(Math.random() * 30) + 70;

        document.getElementById("result").innerText = "👉 " + data.excuse;
        document.getElementById("score").innerText =
            "Believability Score: " + confidence + "%";

    } catch (error) {
        document.getElementById("result").innerText =
            "Error generating excuse. Please try again.";
    }
}