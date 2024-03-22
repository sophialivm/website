// function toggleVisibility() {
//     var elementA = document.getElementById("gallery-container");
//     var elementB = document.getElementById("index-container");
//     if (elementB.style.display === "none") {
//         elementB.style.display = "block"; // Show the element
//         elementA.style.display = "none"; // Show the element
//     } else {
//         elementB.style.display = "none"; // Hide the element
//         elementA.style.display = "grid"; // Show the element
//     }
// }

function toggleGallery() {
    var gallery = document.getElementById("gallery-container");
    var index = document.getElementById("index-container");
    if (gallery.style.display = "none") {
        index.style.display = "none";
        gallery.style.display = "grid";
    }
}

function toggleIndex() {
    var gallery = document.getElementById("gallery-container");
    var index = document.getElementById("index-container");
    if (index.style.display = "none") {
        gallery.style.display = "none";
        index.style.display = "block";
    } 
}