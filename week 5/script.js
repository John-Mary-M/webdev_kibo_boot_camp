// variable to keep track of current slide
let currentSlide = 1;

const nextbutton = document.querySelector('.next')
const prevbutton = document.querySelector('.prev')
const slides = document.querySelectorAll('.cw'); // select all cards

// seperate listener for prev event
prevbutton.addEventListener('click', function() {
        console.log('clicked');
        console.log(currentSlide);
        slides[currentSlide - 1].classList.add('hidden');
        currentSlide++;
        // loop back to start of slide show
        if (currentSlide >= slides.length){
                currentSlide = 1;
        }
        slides[currentSlide + 1].classList.remove('hidden');
});

// seperate listener for next event
nextbutton.addEventListener('click', function() {
        console.log('clicked');
        console.log(currentSlide);
        slides[currentSlide + 1].classList.add('hidden');
        currentSlide++;
        // loop back to start of slide show
        if (currentSlide >= slides.length){
                currentSlide = 1;
        }
        slides[currentSlide + 1].classList.remove('hidden');
});