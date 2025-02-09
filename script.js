document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        alert("Hey [Shreya 🌝💐]! Hope you like this 💖");
    }, 3000);

    // Music Play Button
    document.getElementById("play-music").addEventListener("click", function() {
        let music = document.getElementById("background-music");
        if (music.paused) {
            music.play();
            this.innerText = "⏸ Pause Music";
        } else {
            music.pause();
            this.innerText = "🎵 Play Music";
        }
    });

    // Function to create butterflies
    function createButterfly() {
        const butterfly = document.createElement("img");
        butterfly.src = "C:\Users\Parichay Biswas\Downloads\—Pngtree—flying red butterfly on transparent_15840222.png"; // Make sure you have a butterfly image
        butterfly.classList.add("butterfly");

        // Random position
        butterfly.style.left = Math.random() * window.innerWidth + "px";
        butterfly.style.top = Math.random() * window.innerHeight + "px";

        document.getElementById("butterflies").appendChild(butterfly);

        // Remove butterfly after a while
        setTimeout(() => {
            butterfly.remove();
        }, 5000);
    }

    // Create multiple butterflies
    setInterval(createButterfly, 1000);
});
