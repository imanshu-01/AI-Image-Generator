const generateForm = document.querySelector(".generate-form");
const ImageGallery = document.querySelector(".image-gallery");

    const PEXELS_API_KEY = "ENTER YOU KEY HERE";

async function generateImages(prompt, quantity) {
    try {
        const response = await fetch(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(prompt)}&per_page=${quantity}`,
            {
                headers: {
                    Authorization: PEXELS_API_KEY
                }
            }
        );

        if (!response.ok) throw new Error("Pexels API error");

        const data = await response.json();
        updateImageCards(data.photos);

    } catch (err) {
        alert("Image load failed");
        console.error(err);
    }
}

function updateImageCards(photos) {
    const cards = document.querySelectorAll(".img-card");

    photos.forEach((photo, index) => {
        const img = cards[index].querySelector("img");
        const downloadBtn = cards[index].querySelector(".download-btn");

        img.src = photo.src.medium;

        img.onload = () => {
            cards[index].classList.remove("loading");
            downloadBtn.href = photo.src.original;
            downloadBtn.download = "#";
        };
    });
}

generateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const prompt = e.target[0].value.trim();
    const quantity = Number(e.target[1].value);

    ImageGallery.innerHTML = Array.from({ length: quantity }, () => `
        <div class="img-card loading">
            <img src="images/loader.svg">
            <a class="download-btn">
            <i class="fas fa-download"></i>
            </a>
        </div>
    `).join("");

    generateImages(prompt, quantity);
});


