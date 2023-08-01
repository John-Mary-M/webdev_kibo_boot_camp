const currentCard = document.querySelector('.cw')

const nextButton = document.querySelector('.slider');
const prevButton = document.querySelector('.slider');

prevButton.addEventListener('click', () => {
        if ((currentCard.classList.contains('.hidden'))) {
                currentCard.classList.remove('hidden');
                console.log('clicked')
        } else {
                currentCard.classList.add('hidden')
                console.log('hidden')
        } 
})

nextButton.addEventListener('click', () => {
        if (!(currentCard.classList.contains('.hidden'))) {
                currentCard.classList.add('hidden');
                console.log('clicked')
        } else {
                currentCard.classList.remove('hidden')
                console.log('hidden')
        } 
})