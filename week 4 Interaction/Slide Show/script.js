// variable to keep track of current slide
let currentSlide = 1;

const body = document.querySelector('body')
const slides = document.querySelectorAll('.slide'); // select all slide classes

// seperate listener for click event
 body.addEventListener('click', function() {
        console.log('clicked');
        console.log(currentSlide);
        slides[currentSlide - 1].classList.add('hidden');
        currentSlide++;
        // loop back to start of slide show
        if (currentSlide > slides.length){
                currentSlide = 1;
        }
        slides[currentSlide - 1].classList.remove('hidden');
});

// listener for keyup event
body.addEventListener('keyup', function(event){
        // check if spacebar or right arrow key is pressed
        if (event.key === ' ' || event.key === 'ArrowRight') {
                // hide the current slide
                slides[currentSlide - 1].classList.add('hidden');
                // move to the next slide
                currentSlide++
        
                // check if reached the end of slides, loop back to start
                if (currentSlide > slides.length){
                currentSlide = 1;
                }
                // show the next slide
                slides[currentSlide - 1].classList.remove('hidden');
        }
        // check if left arrow key is pressed
        else if (event.key === 'ArrowLeft') {
                // Hide the current slide
                slides[currentSlide - 1].classList.add('hidden')

                // move to the previous slide
                currentSlide--;

                // check if reached begining, loop back to the end
                if (currentSlide < 1) {
                        currentSlide = slides.length - 1;
                }
                // show the previous slide
                slides[currentSlide - 1].classList.remove('hidden');
        }
});

