// IMAGE VIEWER

let modal = document.getElementById("myModal");
let fullImage = document.getElementById('full_img');

// creates a collection of image elements with the 'zoomable' class
let images = document.getElementsByClassName('zoomable');

// iterates through collection adding an onclick function which shows the modal
for (const i of images) {
    i.onclick = function() {
        modal.style.display = "block";
        fullImage.src = this.src;
    }
}

modal.onclick = function() {
    this.style.display = 'none';
}