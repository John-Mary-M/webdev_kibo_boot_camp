
function handleImageClick(event) {
        var imageElement = event.target;
        if ((imageElement.classList.contains('zoomed'))) {
                // If image is already zoomed, remove the class to return it to its former state
                imageElement.classList.remove('zoomed');
                console.log('clicked')
        } else {
                // If image is not zoomed, add the class to zoom it
                imageElement.classList.add('zoomed');
                console.log('if first one ran this shdnt')
        }
}

document.addEventListener('DOMContentLoaded', function () {
        // Get all image elements
        var images = document.getElementsByTagName('img');

        // Loop through each image element
        for (var i = 0; i < images.length; i++) {
                // Add a click event listener to each image
                images[i].addEventListener('on click', handleImageClick);
        }
});

