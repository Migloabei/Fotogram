let bilder = [
    ".//img/vogel.jpg",
    ".//img/biene.jpg",
    ".//img/echse2.jpg",
    ".//img/kröte.jpg",
    ".//img/ente.jpg",
    "./img/libele.jpg",
    "./img/affe.jpg",
    "./img/echse.jpg",
    "./img/hase.jpg",
    "./img/hund.jpg",
    "./img/marinkaefer.jpg",
    "./img/schmetterling.jpg"
];

function ladeBilder() {
    let gallery = document.getElementById("gallery");

    for (let i = 0; i < bilder.length; i++) {
        let img = document.createElement("img"); 
        img.src = bilder[i];
        img.classList.add("foto"); 
        gallery.appendChild(img);
    }
}

let currentIndex = 0;

ladeBilder();

const dialog = document.getElementById("imageDialog");
const dialogImage = document.getElementById("dialogImage");
const closeBtn = document.getElementById("closeDialogBtn");
const dialogTitle = document.getElementById("dialogTitle");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const imageCounter = document.getElementById("imageCounter");


document.getElementById("gallery").onclick = function(e) {
    if (e.target.tagName === "IMG") {
        
        let allThumbs = Array.from(document.querySelectorAll(".foto"));

        
        currentIndex = allThumbs.indexOf(e.target);

        
        dialogImage.src = e.target.src;

        let fullPath = e.target.src;
        let parts = fullPath.split("/");
        let fileName = parts[parts.length - 1];
        dialogTitle.textContent = fileName;

        imageCounter.textContent = (currentIndex + 1) + " / " + bilder.length;

        dialog.showModal();
    }
};


closeBtn.onclick = function() {
    dialog.close();
};


dialog.onclick = function(e) {
    if (e.target === dialog) {
        dialog.close();
    }
};


function showImage(index) {
    
    if (index < 0) {
        index = bilder.length - 1;
    }
    if (index >= bilder.length) {
        index = 0;
    }

    currentIndex = index;

    dialogImage.src = bilder[currentIndex];

    let parts = bilder[currentIndex].split("/");
    let fileName = parts[parts.length - 1];
    dialogTitle.textContent = fileName;
    imageCounter.textContent = (currentIndex + 1) + " / " + bilder.length;
}


prevBtn.onclick = function () {
    showImage(currentIndex - 1);
};

nextBtn.onclick = function () {
    showImage(currentIndex + 1);
};


document.addEventListener("keyup", function (e) {
    if (!dialog.open) {
        return;
    }

    if (e.key === "ArrowLeft") {
        e.preventDefault();
        showImage(currentIndex - 1);
    }

    if (e.key === "ArrowRight") {
        e.preventDefault();
        showImage(currentIndex + 1);
    }

    if (e.key === "Escape") {
        e.preventDefault();
        dialog.close();
    }
});
