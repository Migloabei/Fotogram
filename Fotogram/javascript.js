const dialog = document.getElementById("imageDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogTitle = document.getElementById("dialogTitle");
const imageCounter = document.getElementById("imageCounter");


let images = [
    "img/vogel.jpg",
    "img/biene.jpg",
    "img/echse2.jpg",
    "img/kroete.jpg",
    "img/ente.jpg",
    "img/libele.jpg",
    "img/affe.jpg",
    "img/echse.jpg",
    "img/hase.jpg",
    "img/hund.jpg",
    "img/marinkaefer.jpg",
    "img/schmetterling.jpg"
];

let currentIndex = 0;

function loadImages() {
    const gallery = document.getElementById("gallery");
    let html = "";

    for (let i = 0; i < images.length; i++) {
        html += getImageHTML(i);
    }

    gallery.innerHTML = html;
}

function getImageHTML(i) {
    const parts = images[i].split("/");
    const fileName = parts[parts.length - 1];

    return `
        <img
            src="${images[i]}"
            class="photo"
            data-index="${i}"
            data-title="${fileName}"
            alt="${fileName}"
        >
    `;
}

function showImage(index) {
    if (index < 0) {
        index = images.length - 1;
    }
    if (index >= images.length) {
        index = 0;
    }

    currentIndex = index;

    dialogImage.src = images[currentIndex];

    const parts = images[currentIndex].split("/");
    const fileName = parts[parts.length - 1];
    dialogTitle.textContent = fileName;

    imageCounter.textContent = (currentIndex + 1) + " / " + images.length;
}

const gallery = document.getElementById("gallery");

gallery.onclick = function (e) {
    if (e.target.classList.contains("photo")) {
        currentIndex = Number(e.target.dataset.index);
        showImage(currentIndex);
        dialog.showModal();
    }
};

function goPrev() {
    showImage(currentIndex - 1);
}

function goNext() {
    showImage(currentIndex + 1);
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.onclick = goPrev;
nextBtn.onclick = goNext;

const closeBtn = document.getElementById("closeDialogBtn");

closeBtn.onclick = function () {
    dialog.close();
};

dialog.onclick = function (e) {
    if (e.target === dialog) {
        dialog.close();
    }
};

document.addEventListener("keyup", function (e) {
    if (!dialog.open) {
        return;
    }

    if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
    }

    if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
    }

    if (e.key === "Escape") {
        e.preventDefault();
        dialog.close();
    }
});

loadImages();
